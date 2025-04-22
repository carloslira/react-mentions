import type { HTMLProps } from 'react';

import type { SuggestionData } from '../types';

import getSubstringIndex from '../utils/get-substring-index';

export type SuggestionProps = HTMLProps<HTMLLIElement> & {
  index: number;
  query: string;
  focused?: boolean;
  suggestion: SuggestionData;
  ignoreAccents?: boolean;
};

const Suggestion = ({
  query,
  focused = false,
  suggestion,
  ignoreAccents,
  ...rest
}: SuggestionProps) => {
  const renderContent = () => {
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

  return (
    <li role="option" aria-selected={focused} {...rest}>
      {renderContent()}
    </li>
  );
};

export default Suggestion;
