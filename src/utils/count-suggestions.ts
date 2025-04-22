import type { SuggestionsMap } from '../types';

const countSuggestions = (suggestions: SuggestionsMap) =>
  Object.values(suggestions).reduce(
    (acc, { results }) => acc + results.length,
    0,
  );

export default countSuggestions;
