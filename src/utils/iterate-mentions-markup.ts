import { DefaultMarkupTemplate } from '../constants';

import type { SuggestionDataSource } from '../types';
import coerceCapturingGroups from './coerce-capturing-groups';

import combineRegExps from './combine-reg-exps';
import countPlaceholders from './count-placeholders';
import DefaultDisplayTransform from './default-display-transform';
import findPositionOfCapturingGroup from './find-position-of-capturing-group';
import markupToRegex from './markup-to-regex';

const emptyFn = () => {};

export type MarkupIteratee = (
  match: string,
  matchIndex: number,
  plainTextIndex: number,
  id: string,
  display: string,
  mentionIndex: number,
  start: number,
) => void;

export type TextIteratee = (
  value: string,
  start: number,
  currentIndex: number,
) => void;

// Finds all occurrences of the markup in the value and calls the `markupIteratee` callback for each of them.
// The optional `textIteratee` callback is called for each plain text ranges in between these markup occurrences.
const iterateMentionsMarkup = (
  value: string,
  dataSources: Array<SuggestionDataSource>,
  markupIteratee: MarkupIteratee,
  textIteratee: TextIteratee = emptyFn,
) => {
  const regex = combineRegExps(
    dataSources.map((dataSource) =>
      dataSource.regex
        ? coerceCapturingGroups(dataSource.regex, dataSource.markup)
        : markupToRegex(dataSource.markup),
    ),
  );

  let accOffset = 2; // first is whole match, second is the for the capturing group of first regexp component
  const captureGroupOffsets = dataSources.map(({ markup }) => {
    const result = accOffset;
    // + 1 is for the capturing group we add around each regexp component in combineRegExps
    accOffset += countPlaceholders(markup) + 1;
    return result;
  });

  let match: RegExpExecArray | null;
  let start = 0;
  let currentPlainTextIndex = 0;

  // detect all mention markup occurrences in the value and iterate the matches
  while ((match = regex.exec(value)) !== null) {
    const offset = captureGroupOffsets.find((o) => !!match?.[o]);
    if (offset === undefined) {
      continue;
    }

    const dataSourceIndex = captureGroupOffsets.indexOf(offset);
    const { markup, displayTransform } = dataSources[dataSourceIndex];
    const idPos =
      offset +
      findPositionOfCapturingGroup(markup ?? DefaultMarkupTemplate, 'id');
    const displayPos =
      offset +
      findPositionOfCapturingGroup(markup ?? DefaultMarkupTemplate, 'display');

    const id = match[idPos];
    const display = (displayTransform ?? DefaultDisplayTransform)(
      id,
      match[displayPos],
    );

    const substr = value.substring(start, match.index);
    textIteratee(substr, start, currentPlainTextIndex);
    currentPlainTextIndex += substr.length;

    markupIteratee(
      match[0],
      match.index,
      currentPlainTextIndex,
      id,
      display,
      dataSourceIndex,
      start,
    );
    currentPlainTextIndex += display.length;
    start = regex.lastIndex;
  }

  if (start < value.length) {
    textIteratee(value.substring(start), start, currentPlainTextIndex);
  }
};

export default iterateMentionsMarkup;
