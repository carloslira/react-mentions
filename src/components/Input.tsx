import type {
  Ref,
  CSSProperties,
  UIEventHandler,
  ReactEventHandler,
  FocusEventHandler,
  ChangeEventHandler,
  KeyboardEventHandler,
  ClipboardEventHandler,
  CompositionEventHandler,
} from 'react';

export type InputProps<E extends HTMLElement = HTMLInputElement> = {
  ref: Ref<E>;
  value: string;
  style: CSSProperties;
  onCut: ClipboardEventHandler<E>;
  onCopy: ClipboardEventHandler<E>;
  onPaste: ClipboardEventHandler<E>;
  onBlur: FocusEventHandler<E>;
  onScroll: UIEventHandler<E>;
  onChange: ChangeEventHandler<E>;
  onSelect: ReactEventHandler<E>;
  onKeyDown: KeyboardEventHandler<E>;
  onCompositionStart: CompositionEventHandler<E>;
  onCompositionEnd: CompositionEventHandler<E>;
};
