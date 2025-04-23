import type {
  ReactNode,
  ElementType,
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

import type { SuggestionProps } from './Suggestion';
import type { SuggestionsProps } from './Suggestions';
import type { SuggestionsListProps } from './SuggestionsList';

import Suggestion from './Suggestion';

type SuggestionsOverlayProps = {
  id: string;
  style?: CSSProperties;
  focusIndex: number;
  suggestions: SuggestionsMap;
  ignoreAccents?: boolean;
  scrollFocusedIntoView: boolean;
  SuggestionComponent?: ElementType<SuggestionProps>;
  SuggestionsComponent?: ElementType<SuggestionsProps>;
  SuggestionsListComponent?: ElementType<SuggestionsListProps>;
  onSelect: (
    suggestion: SuggestionData,
    queryInfo: SuggestionsQueryInfo,
  ) => void;
  onMouseDown: MouseEventHandler;
  onMouseEnter: (newFocusIndex: number) => void;
};

const SuggestionsOverlay = forwardRef<HTMLDivElement, SuggestionsOverlayProps>(
  (
    {
      id,
      focusIndex,
      suggestions,
      ignoreAccents,
      scrollFocusedIntoView,
      SuggestionComponent = Suggestion,
      SuggestionsComponent = 'div',
      SuggestionsListComponent = 'ul',
      onSelect,
      onMouseDown,
      onMouseEnter,
      ...rest
    },
    ref,
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
      <div ref={ref} {...rest}>
        <SuggestionsComponent onMouseDown={onMouseDown}>
          {renderSuggestions()}
        </SuggestionsComponent>
      </div>
    );
  },
);

export default SuggestionsOverlay;
