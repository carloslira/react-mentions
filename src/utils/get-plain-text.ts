import type { SuggestionDataSource } from '../types';

import iterateMentionsMarkup from './iterate-mentions-markup';

const getPlainText = (
  value: string,
  dataSources: Array<SuggestionDataSource>,
) => {
  let result = '';

  iterateMentionsMarkup(
    value,
    dataSources,
    (_match, _index, _plainTextIndex, _id, display) => {
      result += display;
    },
    (plainText) => {
      result += plainText;
    },
  );

  return result;
};

export default getPlainText;
