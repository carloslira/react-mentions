import { MouseEventHandler } from 'react';

export type SuggestionsProps<E extends HTMLElement = HTMLDivElement> = {
  onMouseDown: MouseEventHandler<E>;
};
