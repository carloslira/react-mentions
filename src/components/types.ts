import type { Ref, HTMLProps, ElementType, ComponentProps } from 'react';

export type MentionsInputElement<Multiline extends boolean> =
  Multiline extends true ? HTMLTextAreaElement : HTMLInputElement;

export type InputProps<Multiline extends boolean> = Omit<
  HTMLProps<MentionsInputElement<Multiline>>,
  'ref'
> & {
  ref?: Ref<MentionsInputElement<Multiline>>;
};

export type MentionsInputComponents = {
  Mention: ElementType;
  Suggestion: ElementType;
  Suggestions: ElementType;
  SuggestionsList: ElementType;
};

export type MentionsInputComponentsProps<
  Components extends MentionsInputComponents,
> = {
  mention: ComponentProps<Components['Mention']>;
  suggestion: ComponentProps<Components['Suggestion']>;
  suggestions: ComponentProps<Components['Suggestions']>;
  suggestionsList: ComponentProps<Components['SuggestionsList']>;
};
