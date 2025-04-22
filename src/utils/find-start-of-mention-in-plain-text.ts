import type { SuggestionDataSource } from '../types';

import iterateMentionsMarkup from './iterate-mentions-markup';

// For a given indexInPlainText that lies inside a mention,
// returns a the index of of the first char of the mention in the plain text.
// If indexInPlainText does not lie inside a mention, returns indexInPlainText.
const findStartOfMentionInPlainText = (
  value: string,
  dataSources: Array<SuggestionDataSource>,
  indexInPlainText: number,
) => {
  let result = indexInPlainText;
  let foundMention = false;

  iterateMentionsMarkup(
    value,
    dataSources,
    (_markup, _index, mentionPlainTextIndex, _id, display) => {
      if (
        mentionPlainTextIndex <= indexInPlainText &&
        mentionPlainTextIndex + display.length > indexInPlainText
      ) {
        result = mentionPlainTextIndex;
        foundMention = true;
      }
    },
  );

  if (foundMention) {
    return result;
  }
};

export default findStartOfMentionInPlainText;
