import type {
  ReactNode,
  ForwardedRef,
  CSSProperties,
  MouseEventHandler,
} from 'react';

import { useRef, useMemo, useEffect, forwardRef } from 'react';

import type {
  SuggestionData,
  SuggestionsMap,
  SuggestionsQueryInfo,
} from '../types';

import getSuggestionHtmlId from '../utils/get-suggestion-html-id';

import { MentionsInputComponents, MentionsInputComponentsProps } from './types';

import Suggestion from './Suggestion';

type SuggestionsOverlayProps<Components extends MentionsInputComponents> = {
  id: string;
  style?: CSSProperties;
  components?: Partial<Components>;
  focusIndex: number;
  suggestions: SuggestionsMap;
  ignoreAccents?: boolean;
  componentsProps?: Partial<MentionsInputComponentsProps<Components>>;
  scrollFocusedIntoView: boolean;
  onSelect: (
    suggestion: SuggestionData,
    queryInfo: SuggestionsQueryInfo,
  ) => void;
  onMouseDown: MouseEventHandler;
  onMouseEnter: (newFocusIndex: number) => void;
};

const SuggestionsOverlay = forwardRef(
  <Components extends MentionsInputComponents>(
    {
      id,
      style,
      components,
      focusIndex,
      suggestions,
      ignoreAccents,
      componentsProps,
      scrollFocusedIntoView,
      onSelect,
      onMouseDown,
      onMouseEnter,
    }: SuggestionsOverlayProps<Components>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
      const list = listRef.current;
      if (
        !list ||
        list.offsetHeight >= list.scrollHeight ||
        !scrollFocusedIntoView
      ) {
        return;
      }

      const scrollTop = list.scrollTop;
      const { top: topContainer } = list.getBoundingClientRect();

      let { top, bottom } = list.children[focusIndex].getBoundingClientRect();
      top = top - topContainer + scrollTop;
      bottom = bottom - topContainer + scrollTop;

      if (top < scrollTop) {
        list.scrollTop = top;
      } else if (bottom > list.offsetHeight) {
        list.scrollTop = bottom - list.offsetHeight;
      }
    }, [focusIndex, scrollFocusedIntoView]);

    const SuggestionComponent = components?.Suggestion ?? Suggestion;
    const SuggestionsComponent = components?.Suggestions ?? 'div';
    const SuggestionsListComponent = components?.SuggestionsList ?? 'ul';

    const renderedSuggestions = useMemo(
      () =>
        Object.values(suggestions).reduce<Array<ReactNode>>(
          (acc, { results, queryInfo }) => [
            ...acc,
            ...results.map((result, index) => {
              const suggestionIndex = acc.length + index;

              const isFocused = suggestionIndex === focusIndex;
              const { dataSourceIndex, query } = queryInfo;

              return (
                <SuggestionComponent
                  id={getSuggestionHtmlId(id, suggestionIndex)}
                  key={`${dataSourceIndex}-${result.id}`}
                  index={suggestionIndex}
                  query={query}
                  focused={isFocused}
                  suggestion={result}
                  ignoreAccents={ignoreAccents}
                  onClick={() => onSelect(result, queryInfo)}
                  onMouseEnter={() => onMouseEnter?.(suggestionIndex)}
                  {...componentsProps?.suggestion}
                />
              );
            }),
          ],
          [],
        ),
      [
        id,
        focusIndex,
        suggestions,
        ignoreAccents,
        componentsProps?.suggestion,
        SuggestionComponent,
        onSelect,
        onMouseEnter,
      ],
    );

    if (renderedSuggestions.length <= 0) {
      return null;
    }

    return (
      <div ref={ref} style={{ ...style, zIndex: 999 }}>
        <SuggestionsComponent
          onMouseDown={onMouseDown}
          {...componentsProps?.suggestions}
        >
          <SuggestionsListComponent
            id={id}
            ref={listRef}
            role="listbox"
            style={{
              overflow: 'auto',
              listStyleType: 'none',
            }}
            {...componentsProps?.suggestionsList}
          >
            {renderedSuggestions}
          </SuggestionsListComponent>
        </SuggestionsComponent>
      </div>
    );
  },
);

export default SuggestionsOverlay;
