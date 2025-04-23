import type {
  DetailedHTMLProps,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

export type MentionsInputElement<Multiline extends boolean> =
  Multiline extends true ? HTMLTextAreaElement : HTMLInputElement;

export type MentionsInputDetailedHTMLProps<Multiline extends boolean> =
  Multiline extends true
    ? DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >
    : DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;
