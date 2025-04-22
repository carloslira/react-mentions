export type MentionsInputElement<Multiline extends boolean> =
  Multiline extends true ? HTMLTextAreaElement : HTMLInputElement;
