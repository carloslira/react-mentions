import type { CSSProperties } from 'react';
import { useRef, useMemo, useState, useLayoutEffect } from 'react';

import { flushSync } from 'react-dom';

import isEqual from 'react-fast-compare';

import type {
  State as PopperState,
  Options as PopperOptions,
  Instance as PopperInstance,
  Obj,
  Modifier,
  VirtualElement,
} from '@popperjs/core';

import { createPopper as defaultCreatePopper } from '@popperjs/core';

type Styles = {
  [key: string]: Partial<CSSProperties>;
};

type Attribute = {
  [key: string]: string;
};

type Attributes = {
  [key: string]: Attribute;
};

type State = {
  styles: Styles;
  attributes: Attributes;
};

type Options = PopperOptions & {
  createPopper: typeof defaultCreatePopper;
};

const fromEntries = <T>(entries: Array<[string, T]>) =>
  entries.reduce<{ [key: string]: T }>((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

const EMPTY_MODIFIERS: Options['modifiers'] = [];

type UsePopperResult = {
  state: PopperState | null;
  styles: Styles;
  attributes: Attributes;
  update: PopperInstance['update'] | null;
  forceUpdate: PopperInstance['forceUpdate'] | null;
};

export const usePopper = (
  referenceElement: Element | VirtualElement | null,
  popperElement: HTMLElement | null,
  options: Partial<Options> = {},
): UsePopperResult => {
  const prevOptions = useRef<PopperOptions | null>(null);

  const optionsWithDefaults: PopperOptions = {
    strategy: options.strategy ?? 'absolute',
    placement: options.placement ?? 'bottom',
    modifiers: options.modifiers ?? EMPTY_MODIFIERS,
    onFirstUpdate: options.onFirstUpdate,
  };

  const [state, setState] = useState<State>({
    attributes: {},
    styles: {
      arrow: {
        position: 'absolute',
      },
      popper: {
        top: '0',
        left: '0',
        position: optionsWithDefaults.strategy,
      },
    },
  });

  const updateStateModifier = useMemo<Modifier<unknown, Obj>>(
    () => ({
      name: 'updateState',
      phase: 'write',
      enabled: true,
      requires: ['computeStyles'],
      fn: ({ state }) => {
        const elements = Object.keys(state.elements);

        flushSync(() => {
          setState({
            styles: fromEntries(
              elements.map((element) => [
                element,
                (state.styles[element] as CSSProperties) ?? {},
              ]),
            ),
            attributes: fromEntries(
              elements.map((element) => [
                element,
                state.attributes[element] as Attribute,
              ]),
            ),
          });
        });
      },
    }),
    [],
  );

  const popperOptions = useMemo<PopperOptions>(() => {
    const modifiers = [
      ...optionsWithDefaults.modifiers,
      updateStateModifier,
      { name: 'applyStyles', enabled: false },
    ];

    const newOptions = {
      strategy: optionsWithDefaults.strategy,
      placement: optionsWithDefaults.placement,
      modifiers,
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
    };

    if (isEqual(prevOptions.current, newOptions)) {
      return prevOptions.current ?? newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [
    optionsWithDefaults.onFirstUpdate,
    optionsWithDefaults.placement,
    optionsWithDefaults.strategy,
    optionsWithDefaults.modifiers,
    updateStateModifier,
  ]);

  const popperInstanceRef = useRef<PopperInstance>(null);

  useLayoutEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);

  useLayoutEffect(() => {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    const createPopper = options.createPopper || defaultCreatePopper;
    const popperInstance = createPopper(
      referenceElement,
      popperElement,
      popperOptions,
    );

    popperInstanceRef.current = popperInstance;

    return () => {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);

  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current
      ? popperInstanceRef.current.forceUpdate
      : null,
  };
};
