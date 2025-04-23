import type { Ref, ReactNode, CSSProperties } from 'react';
import { forwardRef, useMemo } from 'react';

import { createPortal } from 'react-dom';

import type { SuggestionDataSource } from '../types';

import type {
  TextIteratee,
  MarkupIteratee,
} from '../utils/iterate-mentions-markup';

import iterateMentionsMarkup from '../utils/iterate-mentions-markup';

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

type HighlighterProps = {
  value: string;
  inputEl: HTMLInputElement | HTMLTextAreaElement | null;
  caretRef: Ref<HTMLSpanElement | null>;
  multiline: boolean;
  dataSources: Array<SuggestionDataSource>;
  selectionStart: number | null;
  selectionEnd: number | null;
  highlightColor?: CSSProperties['backgroundColor'];
};

const Highlighter = forwardRef<HTMLDivElement, HighlighterProps>(
  (
    {
      value,
      inputEl,
      caretRef,
      multiline,
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
        typeof selectionStart === 'number' &&
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
        {components}
        <span style={{ visibility: 'hidden' }}>&nbsp;</span>
      </div>,
      containerEl,
    );
  },
);

export default Highlighter;
