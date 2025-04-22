import { DefaultTrigger } from '../constants';

import escapeRegex from './escape-regex';

const makeTriggerRegex = (
  trigger: string | RegExp = DefaultTrigger,
  allowSpaceInQuery = false,
) => {
  if (trigger instanceof RegExp) {
    return trigger;
  } else {
    const escapedTriggerChar = escapeRegex(trigger);

    // first capture group is the part to be replaced on completion
    // second capture group is for extracting the search query
    return new RegExp(
      `(?:^|\\s)(${escapedTriggerChar}([^${
        allowSpaceInQuery ? '' : '\\s'
      }${escapedTriggerChar}]*))$`,
    );
  }
};

export default makeTriggerRegex;
