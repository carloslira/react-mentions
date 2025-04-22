import invariant from 'invariant';

import { DefaultMarkupTemplate } from '../constants';

import countPlaceholders from './count-placeholders';

const coerceCapturingGroups = (
  regex: RegExp,
  markup = DefaultMarkupTemplate,
) => {
  const numberOfGroups =
    (new RegExp(`${regex.toString()}|`).exec('')?.length ?? 0) - 1;

  const numberOfPlaceholders = countPlaceholders(markup);

  invariant(
    numberOfGroups === numberOfPlaceholders,
    `Number of capturing groups in RegExp ${regex.toString()} (${numberOfGroups}) does not match the number of placeholders in the markup '${markup}' (${numberOfPlaceholders})`,
  );

  return regex;
};

export default coerceCapturingGroups;
