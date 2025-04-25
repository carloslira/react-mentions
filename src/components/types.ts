import type { ElementType, ComponentProps } from 'react';

export type MentionsInputComponents = {
  Input: ElementType;
  Mention: ElementType;
  Suggestion: ElementType;
  Suggestions: ElementType;
  SuggestionsList: ElementType;
};

export type MentionsInputComponentsProps<
  Components extends MentionsInputComponents,
> = {
  input: ComponentProps<Components['Input']>;
  mention: ComponentProps<Components['Mention']>;
  suggestion: ComponentProps<Components['Suggestion']>;
  suggestions: ComponentProps<Components['Suggestions']>;
  suggestionsList: ComponentProps<Components['SuggestionsList']>;
};
