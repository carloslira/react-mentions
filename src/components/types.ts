import type { ElementType, ComponentPropsWithRef } from 'react';

export type MentionsInputComponents = {
  Input: ElementType;
  Suggestion: ElementType;
  Suggestions: ElementType;
  SuggestionsList: ElementType;
};

export type MentionsInputComponentsProps<
  Components extends MentionsInputComponents = MentionsInputComponents,
> = {
  input: ComponentPropsWithRef<Components['Input']>;
  suggestion: ComponentPropsWithRef<Components['Suggestion']>;
  suggestions: ComponentPropsWithRef<Components['Suggestions']>;
  suggestionsList: ComponentPropsWithRef<Components['SuggestionsList']>;
};
