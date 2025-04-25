import type { Ref, ReactNode, CSSProperties, ForwardedRef } from 'react';
import { forwardRef, useMemo } from 'react';

import { createPortal } from 'react-dom';

import type { SuggestionDataSource } from '../types';

import type {
  TextIteratee,
  MarkupIteratee,
} from '../utils/iterate-mentions-markup';

import iterateMentionsMarkup from '../utils/iterate-mentions-markup';

import type {
  MentionsInputComponents,
  MentionsInputComponentsProps,
} from './types';

import Mention from './Mention';

const getInputRect = (input: HTMLInputElement | HTMLTextAreaElement | null) => {
  const rect = { x: 0, y: 0, width: 0, height: 0 };
  if (!input) {
    return rect;
  }

  const computedStyle = getComputedStyle(input);

  rect.width = input.clientWidth;
  rect.width -= parseFloat(computedStyle.paddingLeft);
  rect.width -= parseFloat(computedStyle.paddingRight);

  rect.height = input.clientHeight;
  rect.height -= parseFloat(computedStyle.paddingTop);
  rect.height -= parseFloat(computedStyle.paddingBottom);

  rect.x = input.offsetLeft;
  rect.x += parseFloat(computedStyle.paddingLeft);
  rect.x += parseFloat(computedStyle.borderLeft);

  rect.y = input.offsetTop;
  rect.y += parseFloat(computedStyle.paddingTop);
  rect.y += parseFloat(computedStyle.borderTop);

  return rect;
};

const getInputContainerEl = (
  input: HTMLInputElement | HTMLTextAreaElement | null,
) => {
  let containerEl = input?.parentElement;
  if (!containerEl) {
    containerEl = document.body;
  }

  return containerEl;
};

type HighlighterProps<Components extends MentionsInputComponents> = {
  value: string;
  inputEl: HTMLInputElement | HTMLTextAreaElement | null;
  caretRef: Ref<HTMLSpanElement | null>;
  multiline: boolean;
  components?: Partial<Components>;
  dataSources: Array<SuggestionDataSource>;
  selectionStart: number | null;
  selectionEnd: number | null;
  highlightColor: CSSProperties['backgroundColor'];
  componentsProps?: Partial<MentionsInputComponentsProps<Components>>;
};

const Highlighter = forwardRef(
  <Components extends MentionsInputComponents>(
    {
      value,
      inputEl,
      caretRef,
      multiline,
      components,
      dataSources,
      selectionStart,
      selectionEnd,
      highlightColor,
      componentsProps,
    }: HighlighterProps<Components>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const componentsArray: Array<ReactNode> = [];

    const MentionComponent = components?.Mention ?? Mention;

    const mentionIteratee: MarkupIteratee = (
      _markup,
      index,
      _indexInPlainText,
      id,
      display,
    ) => {
      componentsArray.push(
        <MentionComponent
          {...componentsProps?.mention}
          key={`${id}-${index}`}
          style={{
            backgroundColor: highlightColor,
            ...componentsProps?.mention?.style,
          }}
        >
          {componentsProps?.mention?.children ?? display}
        </MentionComponent>,
      );
    };

    const textIteratee: TextIteratee = (text, index, indexInPlaintext) => {
      const shouldRenderCaret =
        typeof selectionStart === 'number' &&
        selectionStart === selectionEnd &&
        selectionStart >= indexInPlaintext &&
        selectionStart <= indexInPlaintext + text.length;

      if (shouldRenderCaret) {
        const splitIndex = selectionStart - indexInPlaintext;
        const startText = text.substring(0, splitIndex);
        const endText = text.substring(splitIndex);

        if (startText) {
          componentsArray.push(
            <span
              key={`${index}-${indexInPlaintext}-precaret`}
              style={{ visibility: 'hidden' }}
            >
              {startText}
            </span>,
          );
        }

        componentsArray.push(
          <span key="caret" ref={caretRef} style={{ visibility: 'hidden' }} />,
        );

        if (endText) {
          componentsArray.push(
            <span
              key={`${index}-${indexInPlaintext}-postcaret`}
              style={{ visibility: 'hidden' }}
            >
              {endText}
            </span>,
          );
        }
      } else {
        componentsArray.push(
          <span
            key={`${index}-${indexInPlaintext}`}
            style={{ visibility: 'hidden' }}
          >
            {text}
          </span>,
        );
      }
    };

    iterateMentionsMarkup(value, dataSources, mentionIteratee, textIteratee);

    const rect = getInputRect(inputEl);
    const containerEl = useMemo(() => getInputContainerEl(inputEl), [inputEl]);

    return createPortal(
      <div
        ref={ref}
        style={{
          top: `${rect.y}px`,
          left: `${rect.x}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          zIndex: -1,
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: multiline ? 'pre-wrap' : 'pre',
          overscrollBehavior: 'none',
        }}
      >
        {componentsArray}
        <span style={{ visibility: 'hidden' }}>&nbsp;</span>
      </div>,
      containerEl,
    );
  },
);

export default Highlighter;
