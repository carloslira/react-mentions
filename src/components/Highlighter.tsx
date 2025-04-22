import type { Ref, ReactNode, CSSProperties } from 'react';
import { forwardRef } from 'react';

import type { SuggestionDataSource } from '../types';

import type {
  TextIteratee,
  MarkupIteratee,
} from '../utils/iterate-mentions-markup';

import iterateMentionsMarkup from '../utils/iterate-mentions-markup';

import Mention from './Mention';

type HighlighterProps = {
  value: string;
  style: CSSProperties;
  caretRef: Ref<HTMLSpanElement | null>;
  dataSources: Array<SuggestionDataSource>;
  selectionStart: number | null;
  selectionEnd: number | null;
  highlightColor?: CSSProperties['backgroundColor'];
};

const Highlighter = forwardRef<HTMLDivElement, HighlighterProps>(
  (
    {
      value,
      style,
      caretRef,
      dataSources,
      selectionStart,
      selectionEnd,
      highlightColor,
    },
    ref,
  ) => {
    const components: Array<ReactNode> = [];

    const mentionIteratee: MarkupIteratee = (
      _markup,
      index,
      _indexInPlainText,
      id,
      display,
    ) => {
      components.push(
        <Mention
          key={`${id}-${index}`}
          color={highlightColor}
          display={display}
        />,
      );
    };

    const textIteratee: TextIteratee = (text, index, indexInPlaintext) => {
      const shouldRenderCaret =
        selectionStart &&
        selectionStart === selectionEnd &&
        selectionStart >= indexInPlaintext &&
        selectionStart <= indexInPlaintext + text.length;

      if (shouldRenderCaret) {
        const splitIndex = selectionStart - indexInPlaintext;
        const startText = text.substring(0, splitIndex);
        const endText = text.substring(splitIndex);

        if (startText) {
          components.push(
            <span
              key={`${index}-${indexInPlaintext}-precaret`}
              style={{ visibility: 'hidden' }}
            >
              {startText}
            </span>,
          );
        }

        components.push(
          <span key="caret" ref={caretRef} style={{ visibility: 'hidden' }} />,
        );

        if (endText) {
          components.push(
            <span
              key={`${index}-${indexInPlaintext}-postcaret`}
              style={{ visibility: 'hidden' }}
            >
              {endText}
            </span>,
          );
        }
      } else {
        components.push(
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

    return (
      <div
        ref={ref}
        style={{
          ...style,
          zIndex: -1,
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: 'pre',
          overscrollBehavior: 'none',
        }}
      >
        {components}
        <span style={{ visibility: 'hidden' }}>&nbsp;</span>
      </div>
    );
  },
);

export default Highlighter;
