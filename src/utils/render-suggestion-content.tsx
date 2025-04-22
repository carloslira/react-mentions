import type { SuggestionData } from '../types';

import getSubstringIndex from './get-substring-index';

const renderSuggestionContent = (
  suggestion: SuggestionData,
  query: string,
  ignoreAccents?: boolean,
) => {
  const display = suggestion.display ?? suggestion.id;
  const substrIndex = getSubstringIndex(display, query, ignoreAccents);
  if (substrIndex === -1) {
    return <span>{display}</span>;
  }

  return (
    <span>
      {display.substring(0, substrIndex)}
      <b>{display.substring(substrIndex, substrIndex + query.length)}</b>
      {display.substring(substrIndex + query.length)}
    </span>
  );
};

export default renderSuggestionContent;
