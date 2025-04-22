import type { SuggestionData } from '../types';

import getSubstringIndex from './get-substring-index';

const getDataProvider = (
  data:
    | Array<SuggestionData>
    | ((query: string) => Promise<Array<SuggestionData>>),
  ignoreAccents?: boolean,
) => {
  if (Array.isArray(data)) {
    return function (query: string) {
      const results = [];

      for (let i = 0, l = data.length; i < l; ++i) {
        const display = data[i].display ?? data[i].id;
        if (getSubstringIndex(display, query, ignoreAccents) >= 0) {
          results.push(data[i]);
        }
      }

      return results;
    };
  } else {
    return data;
  }
};

export default getDataProvider;
