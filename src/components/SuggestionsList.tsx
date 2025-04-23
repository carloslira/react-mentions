import type { Ref, CSSProperties } from 'react';

export type SuggestionsListProps<E extends HTMLElement = HTMLUListElement> = {
  id: string;
  ref: Ref<E>;
  role: string;
  style: CSSProperties;
};
