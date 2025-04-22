import type { HTMLProps } from 'react';

import type { SuggestionData } from '../types';

import renderSuggestionContent from '../utils/render-suggestion-content';

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
}: SuggestionProps) => (
  <li role="option" aria-selected={focused} {...rest}>
    {renderSuggestionContent(suggestion, query, ignoreAccents)}
  </li>
);

export default Suggestion;
