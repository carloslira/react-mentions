import type {
  FocusEvent,
  CSSProperties,
  ClipboardEvent,
  ReactEventHandler,
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  ClipboardEventHandler,
  CompositionEventHandler,
} from 'react';

import { useRef, useState, useEffect, useCallback } from 'react';

import { usePopper } from 'react-popper';

import { Key, DefaultMarkupTemplate } from '../constants';

import type {
  MentionData,
  SuggestionsMap,
  SuggestionData,
  SuggestionDataSource,
  SuggestionsQueryInfo,
} from '../types';

import getMentions from '../utils/get-mentions';
import spliceString from '../utils/splice-string';
import getPlainText from '../utils/get-plain-text';
import getDataProvider from '../utils/get-data-provider';
import countSuggestions from '../utils/count-suggestions';
import makeTriggerRegex from '../utils/make-trigger-regex';
import mapPlainTextIndex from '../utils/map-plain-text-index';
import makeMentionsMarkup from '../utils/make-mentions-markup';
import applyChangeToValue from '../utils/apply-change-to-value';
import getEndOfLastMention from '../utils/get-end-of-last-mention';
import DefaultDisplayTransform from '../utils/default-display-transform';
import findStartOfMentionInPlainText from '../utils/find-start-of-mention-in-plain-text';

import type {
  MentionsInputComponents,
  MentionsInputComponentsProps,
} from './types';

import Highlighter from './Highlighter';
import SuggestionsOverlay from './SuggestionsOverlay';

export type MentionsInputProps<
  Components extends MentionsInputComponents = MentionsInputComponents,
> = {
  value?: string;
  multiline?: boolean;
  components?: Partial<Components>;
  dataSources: Array<SuggestionDataSource>;
  ignoreAccents?: boolean;
  highlightColor?: CSSProperties['backgroundColor'];
  componentsProps?: Partial<MentionsInputComponentsProps<Components>>;
  onBlur?: (event: FocusEvent, clickedSuggestion: boolean) => void;
  onSelect?: ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange?: (
    newValue: string,
    plainTextValue: string,
    mentions: Array<MentionData>,
  ) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const MentionsInput = <
  Components extends MentionsInputComponents = MentionsInputComponents,
>({
  value = '',
  multiline = false,
  components,
  dataSources,
  ignoreAccents = false,
  highlightColor,
  componentsProps,
  onBlur,
  onSelect,
  onChange,
  onKeyDown,
}: MentionsInputProps<Components>) => {
  const isComposingRef = useRef(false);
  const suggestionsOverlayIdRef = useRef('');

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  const queryIdRef = useRef(0);

  const suggestionsRef = useRef<SuggestionsMap>({});
  const suggestionsMouseDownRef = useRef(false);

  const [caretRef, setCaretRef] = useState<HTMLSpanElement | null>(null);
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);

  const [suggestions, setSuggestions] = useState<SuggestionsMap>({});

  const [focusIndex, setFocusIndex] = useState(0);
  const [scrollFocusedIntoView, setScrollFocusedIntoView] = useState(false);

  const [selectionStart, setSelectionStart] = useState<number | null>(null);
  const [selectionEnd, setSelectionEnd] = useState<number | null>(null);

  const [setSelectionAfterMentionChange, setSetSelectionAfterMentionChange] =
    useState(false);

  const [setSelectionAfterHandlePaste, setSetSelectionAfterHandlePaste] =
    useState(false);

  const { styles, attributes } = usePopper(caretRef, popperRef, {
    placement: 'bottom-start',
  });

  useEffect(() => {
    suggestionsOverlayIdRef.current = Math.random().toString(16).substring(2);
  }, []);

  const setSelectionRange = (
    newSelectionStat: number | null,
    newSelectionEnd: number | null,
  ) => {
    if (newSelectionStat === null || newSelectionEnd === null) {
      return;
    }

    inputRef.current?.setSelectionRange(newSelectionStat, newSelectionEnd);
  };

  useEffect(() => {
    if (!setSelectionAfterMentionChange) {
      return;
    }

    setSetSelectionAfterMentionChange(false);
    setSelectionRange(selectionStart, selectionEnd);
  }, [selectionStart, selectionEnd, setSelectionAfterMentionChange]);

  useEffect(() => {
    if (!setSelectionAfterHandlePaste) {
      return;
    }

    setSetSelectionAfterHandlePaste(false);
    setSelectionRange(selectionStart, selectionEnd);
  }, [selectionStart, selectionEnd, setSelectionAfterHandlePaste]);

  const saveSelectionToClipboard = useCallback(
    (event: ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!inputRef.current) {
        return;
      }

      const inputSelectionStart = inputRef.current.selectionStart;
      const inoutSelectionEnd = inputRef.current.selectionEnd;

      const markupStartIndex = mapPlainTextIndex(
        value,
        dataSources,
        inputSelectionStart,
        'START',
      );

      const markupEndIndex = mapPlainTextIndex(
        value,
        dataSources,
        inoutSelectionEnd,
        'END',
      );

      const eventValue = (event.target as HTMLInputElement).value;

      const textData = eventValue.slice(
        inputSelectionStart === null ? undefined : inputSelectionStart,
        inoutSelectionEnd === null ? undefined : inoutSelectionEnd,
      );

      const mentionsData = value.slice(
        markupStartIndex === null ? undefined : markupStartIndex,
        markupEndIndex === null ? undefined : markupEndIndex,
      );

      event.clipboardData?.setData('text/plain', textData);
      event.clipboardData?.setData('text/mentions', mentionsData);
    },
    [value, dataSources],
  );

  const handleCut: ClipboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    event.preventDefault();

    saveSelectionToClipboard(event);

    const markupStartIndex = mapPlainTextIndex(
      value,
      dataSources,
      selectionStart,
      'START',
    );

    const markupEndIndex = mapPlainTextIndex(
      value,
      dataSources,
      selectionEnd,
      'END',
    );

    const newValue = [
      value.slice(0, markupStartIndex ?? undefined),
      value.slice(markupEndIndex ?? undefined),
    ].join('');

    const newPlainTextValue = getPlainText(newValue, dataSources);

    onChange?.(newValue, newPlainTextValue, getMentions(value, dataSources));
  };

  const handleCopy: ClipboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    event.preventDefault();

    saveSelectionToClipboard(event);
  };

  const handlePaste: ClipboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    event.preventDefault();

    const markupStartIndex = mapPlainTextIndex(
      value,
      dataSources,
      selectionStart,
      'START',
    );

    const markupEndIndex = mapPlainTextIndex(
      value,
      dataSources,
      selectionEnd,
      'END',
    );

    const pastedData = event.clipboardData.getData('text/plain');
    const pastedMentions = event.clipboardData.getData('text/mentions');

    const newValue = spliceString(
      value,
      markupStartIndex ?? 0,
      markupEndIndex ?? 0,
      pastedMentions === '' ? pastedData : pastedMentions,
    ).replace(/\r/g, '');

    const newPlainTextValue = getPlainText(newValue, dataSources);

    onChange?.(newValue, newPlainTextValue, getMentions(newValue, dataSources));

    if (typeof selectionStart !== 'number') {
      return;
    }

    // Move the cursor position to the end of the pasted data
    const startOfMention = findStartOfMentionInPlainText(
      value,
      dataSources,
      selectionStart,
    );

    const nextPos =
      (startOfMention || selectionStart) +
      getPlainText(pastedMentions ?? pastedData!, dataSources).length;

    setSelectionStart(nextPos);
    setSelectionEnd(nextPos);

    setSetSelectionAfterHandlePaste(true);
  };

  const updateHighlighterScroll = () => {
    if (!inputRef.current || !highlighterRef.current) {
      return;
    }

    highlighterRef.current.scrollTop = inputRef.current.scrollTop;
    highlighterRef.current.scrollLeft = inputRef.current.scrollLeft;
  };

  const updateSuggestions = (
    queryId: number,
    dataSourceIndex: number,
    query: string,
    querySequenceStart: number,
    querySequenceEnd: number,
    plainTextValue: string,
    results: Array<SuggestionData>,
  ) => {
    // neglect async results from previous queries
    if (queryId !== queryIdRef.current) {
      return;
    }

    // save in property so that multiple sync state updates from different mentions sources
    // won't overwrite each other
    suggestionsRef.current = {
      ...suggestionsRef.current,
      [dataSourceIndex]: {
        queryInfo: {
          dataSourceIndex,
          query,
          querySequenceStart,
          querySequenceEnd,
          plainTextValue,
        },
        results,
      },
    };

    const suggestionsCount = countSuggestions(suggestionsRef.current);
    setSuggestions(suggestionsRef.current);
    setFocusIndex(
      focusIndex >= suggestionsCount
        ? Math.max(suggestionsCount - 1, 0)
        : focusIndex,
    );
  };

  const queryData = (
    query: string,
    dataSourceIndex: number,
    querySequenceStart: number,
    querySequenceEnd: number,
    plainTextValue: string,
  ) => {
    const dataSource = dataSources[dataSourceIndex];
    const provideData = getDataProvider(dataSource.data, ignoreAccents);

    const syncResult = provideData(query);
    if (syncResult instanceof Array) {
      updateSuggestions(
        queryIdRef.current,
        dataSourceIndex,
        query,
        querySequenceStart,
        querySequenceEnd,
        plainTextValue,
        syncResult,
      );
    }
  };

  const updateMentionsQueries = (
    plainTextValue: string,
    plainTextIndex: number | null,
  ) => {
    // Invalidate previous queries. Async results for previous queries will be neglected.
    queryIdRef.current++;
    suggestionsRef.current = {};

    setSuggestions({});

    const positionInValue = mapPlainTextIndex(
      value,
      dataSources,
      plainTextIndex,
      'NULL',
    );

    // If caret is inside of mention, do not query
    if (positionInValue === null) {
      return;
    }

    // Extract substring in between the end of the previous mention and the caret
    const substringStartIndex = getEndOfLastMention(
      value.substring(0, positionInValue),
      dataSources,
    );

    const substring = plainTextValue.substring(
      substringStartIndex,
      plainTextIndex ?? undefined,
    );

    dataSources.forEach((dataSource, index) => {
      const regex = makeTriggerRegex(
        dataSource.trigger,
        dataSource.allowSpaceInQuery,
      );

      const match = substring.match(regex);
      if (match) {
        const querySequenceStart =
          substringStartIndex + substring.indexOf(match[1], match.index);

        queryData(
          match[2],
          index,
          querySequenceStart,
          querySequenceStart + match[1].length,
          plainTextValue,
        );
      }
    });
  };

  const handleBlur: FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const clickedSuggestion = suggestionsMouseDownRef.current;
    suggestionsMouseDownRef.current = false;

    // only reset selection if the mousedown happened on an element
    // other than the suggestions overlay
    if (!clickedSuggestion) {
      setSelectionStart(null);
      setSelectionEnd(null);
    }

    setTimeout(() => {
      updateHighlighterScroll();
    });

    onBlur?.(event, clickedSuggestion);
  };

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    isComposingRef.current = false;

    let newPlainTextValue = event.target.value;

    let selectionStartBefore = selectionStart;
    if (selectionStartBefore == null) {
      selectionStartBefore = event.target.selectionStart;
    }

    let selectionEndBefore = selectionEnd;
    if (selectionEndBefore == null) {
      selectionEndBefore = event.target.selectionEnd;
    }

    // Derive the new value to set by applying the local change in the textarea's plain text
    const newValue = applyChangeToValue(
      value,
      newPlainTextValue,
      selectionStartBefore,
      selectionEndBefore,
      event.target.selectionEnd ?? 0,
      dataSources,
    );

    // In case a mention is deleted, also adjust the new plain text value
    newPlainTextValue = getPlainText(newValue, dataSources);

    // Save current selection after change to be able to restore caret position after rerendering
    let selectionStartAfter = event.target.selectionStart;
    let selectionEndAfter = event.target.selectionEnd;

    let setSelectionAfterMentionChangeAfter = false;

    // Adjust selection range in case a mention will be deleted by the characters outside of the
    // selection range that are automatically deleted
    const startOfMention = findStartOfMentionInPlainText(
      value,
      dataSources,
      selectionStartAfter ?? 0,
    );

    if (
      startOfMention !== undefined &&
      selectionEndAfter !== null &&
      selectionEndAfter > startOfMention
    ) {
      // only if a deletion has taken place
      const { data } = event.nativeEvent as InputEvent;
      selectionStartAfter = startOfMention + (data?.length ?? 0);
      selectionEndAfter = selectionStart;

      setSelectionAfterMentionChangeAfter = true;
    }

    setSelectionStart(selectionStartAfter);
    setSelectionEnd(selectionEndAfter);

    setSetSelectionAfterMentionChange(setSelectionAfterMentionChangeAfter);

    const mentions = getMentions(newValue, dataSources);

    const { isComposing } = event.nativeEvent as InputEvent;
    if (isComposing && selectionStartAfter === selectionEndAfter) {
      updateMentionsQueries(inputRef.current?.value ?? '', selectionStartAfter);
    }

    onChange?.(newValue, newPlainTextValue, mentions);
  };

  const handleSelect: ReactEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const target = event.target as HTMLInputElement;
    setSelectionStart(target.selectionStart);
    setSelectionEnd(target.selectionEnd);

    // do nothing while a IME composition session is active
    if (isComposingRef.current) {
      return;
    }

    // refresh suggestions queries
    if (target.selectionStart === target.selectionEnd) {
      updateMentionsQueries(
        inputRef.current?.value ?? '',
        target.selectionStart,
      );
    } else {
      clearSuggestions();
    }

    // sync highlighters scroll position
    updateHighlighterScroll();

    onSelect?.(event);
  };

  const shiftFocus = (delta: number) => {
    const suggestionsCount = countSuggestions(suggestions);

    setFocusIndex((suggestionsCount + focusIndex + delta) % suggestionsCount);
    setScrollFocusedIntoView(true);
  };

  const clearSuggestions = () => {
    // Invalidate previous queries. Async results for previous queries will be neglected.
    queryIdRef.current++;
    suggestionsRef.current = {};

    setFocusIndex(0);
    setSuggestions({});
  };

  const addMention = (
    { id, display }: SuggestionData,
    {
      dataSourceIndex,
      querySequenceStart,
      querySequenceEnd,
      plainTextValue,
    }: SuggestionsQueryInfo,
  ) => {
    const { markup, appendSpaceOnAdd, onAdd, displayTransform } =
      dataSources[dataSourceIndex];

    const start = mapPlainTextIndex(
      value,
      dataSources,
      querySequenceStart,
      'START',
    );
    if (typeof start !== 'number') {
      return;
    }

    const end = start + querySequenceEnd - querySequenceStart;

    let insert = makeMentionsMarkup(
      markup ?? DefaultMarkupTemplate,
      id,
      display,
    );

    let displayValue = (displayTransform ?? DefaultDisplayTransform)(
      id,
      display,
    );

    if (appendSpaceOnAdd) {
      insert += ' ';
      displayValue += ' ';
    }

    // Refocus input and set caret position to end of mention
    inputRef.current?.focus();

    const newCaretPosition = querySequenceStart + displayValue.length;
    setSelectionStart(newCaretPosition);
    setSelectionEnd(newCaretPosition);

    setSetSelectionAfterMentionChange(true);

    const newValue = spliceString(value, start, end, insert);
    const mentions = getMentions(newValue, dataSources);
    const newPlainTextValue = spliceString(
      plainTextValue,
      querySequenceStart,
      querySequenceEnd,
      displayValue,
    );

    onChange?.(newValue, newPlainTextValue, mentions);
    onAdd?.({ id, display }, start, end);

    // Make sure the suggestions overlay is closed
    clearSuggestions();
  };

  const selectFocused = () => {
    const { result, queryInfo } = Object.values(suggestions).reduce<
      Array<{ result: SuggestionData; queryInfo: SuggestionsQueryInfo }>
    >(
      (acc, { results, queryInfo }) => [
        ...acc,
        ...results.map((result) => ({ result, queryInfo })),
      ],
      [],
    )[focusIndex];

    addMention(result, queryInfo);

    setFocusIndex(0);
  };

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    // do not intercept key events if the suggestions overlay is not shown
    const suggestionsCount = countSuggestions(suggestions);

    if (suggestionsCount === 0) {
      onKeyDown?.(event);
      return;
    }

    switch (event.key) {
      case Key.Escape: {
        clearSuggestions();
        break;
      }
      case Key.Down: {
        shiftFocus(+1);
        break;
      }
      case Key.Up: {
        shiftFocus(-1);
        break;
      }
      case Key.Tab:
      case Key.Return: {
        selectFocused();
        break;
      }
      default: {
        return;
      }
    }

    event.preventDefault();
    event.stopPropagation();
  };

  const handleCompositionStart: CompositionEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = () => {
    isComposingRef.current = true;
  };

  const handleCompositionEnd: CompositionEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = () => {
    isComposingRef.current = false;
  };

  const handleSuggestionsMouseDown = () => {
    suggestionsMouseDownRef.current = true;
  };

  const handleSuggestionsMouseEnter = (newFocusIndex: number) => {
    setFocusIndex(newFocusIndex);
    setScrollFocusedIntoView(false);
  };

  const inputProps = {
    ref: inputRef,
    value: getPlainText(value, dataSources),
    onCut: handleCut,
    onCopy: handleCopy,
    onPaste: handlePaste,
    onBlur: handleBlur,
    onScroll: updateHighlighterScroll,
    onChange: handleChange,
    onSelect: handleSelect,
    onKeyDown: handleKeyDown,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    style: {
      width: '100%',
      overflow: 'hidden',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',

      background: 'none',
      overscrollBehavior: 'none',
    },
    ...componentsProps?.input,
  };

  const InputComponent =
    components?.Input ?? (multiline ? 'textarea' : 'input');

  return (
    <div style={{ position: 'relative' }}>
      <Highlighter
        ref={highlighterRef}
        value={value}
        inputEl={inputRef.current}
        caretRef={setCaretRef}
        multiline={multiline}
        dataSources={dataSources}
        selectionStart={selectionStart}
        selectionEnd={selectionEnd}
        highlightColor={highlightColor}
      />

      <InputComponent {...inputProps} />

      {selectionStart !== null && (
        <SuggestionsOverlay
          {...attributes.popper}
          id={suggestionsOverlayIdRef.current}
          ref={setPopperRef}
          style={styles.popper}
          components={components}
          focusIndex={focusIndex}
          suggestions={suggestions}
          ignoreAccents={ignoreAccents}
          componentsProps={componentsProps}
          scrollFocusedIntoView={scrollFocusedIntoView}
          onSelect={addMention}
          onMouseDown={handleSuggestionsMouseDown}
          onMouseEnter={handleSuggestionsMouseEnter}
        />
      )}
    </div>
  );
};

export default MentionsInput;
