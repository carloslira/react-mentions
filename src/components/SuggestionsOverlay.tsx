import type {
  ReactNode,
  ForwardedRef,
  CSSProperties,
  MouseEventHandler,
} from 'react';

import { useRef, useEffect, forwardRef } from 'react';

import type {
  SuggestionData,
  SuggestionsMap,
  SuggestionsQueryInfo,
} from '../types';

import countSuggestions from '../utils/count-suggestions';
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

    const renderSuggestion = (
      result: SuggestionData,
      queryInfo: SuggestionsQueryInfo,
      index: number,
    ) => {
      const isFocused = index === focusIndex;
      const { dataSourceIndex, query } = queryInfo;

      return (
        <SuggestionComponent
          id={getSuggestionHtmlId(id, index)}
          key={`${dataSourceIndex}-${result.id}`}
          index={index}
          query={query}
          focused={isFocused}
          suggestion={result}
          ignoreAccents={ignoreAccents}
          onClick={() => onSelect(result, queryInfo)}
          onMouseEnter={() => onMouseEnter?.(index)}
          {...componentsProps?.suggestion}
        />
      );
    };

    const renderSuggestions = () => {
      const suggestionsToRender = (
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
          {Object.values(suggestions).reduce<Array<ReactNode>>(
            (acc, { results, queryInfo }) => [
              ...acc,
              ...results.map((result, index) =>
                renderSuggestion(result, queryInfo, acc.length + index),
              ),
            ],
            [],
          )}
        </SuggestionsListComponent>
      );

      return suggestionsToRender;
    };

    if (countSuggestions(suggestions) <= 0) {
      return null;
    }

    return (
      <div ref={ref} style={{ ...style, zIndex: 999 }}>
        <SuggestionsComponent
          onMouseDown={onMouseDown}
          {...componentsProps?.suggestions}
        >
          {renderSuggestions()}
        </SuggestionsComponent>
      </div>
    );
  },
);

export default SuggestionsOverlay;
