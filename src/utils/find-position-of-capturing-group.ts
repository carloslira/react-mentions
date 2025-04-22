import invariant from 'invariant';

import Placeholders from './placeholders';

const findPositionOfCapturingGroup = (
  markup: string,
  parameterName: 'id' | 'display',
) => {
  invariant(
    parameterName === 'id' || parameterName === 'display',
    `Second arg must be either "id" or "display", got: "${parameterName}"`,
  );

  // find positions of placeholders in the markup
  let idIndex: number | null = markup.indexOf(Placeholders.id);
  let displayIndex: number | null = markup.indexOf(Placeholders.display);

  // set indices to null if not found
  if (idIndex < 0) idIndex = null;
  if (displayIndex < 0) displayIndex = null;

  // markup must contain one of the mandatory placeholders
  invariant(
    idIndex !== null || displayIndex !== null,
    `The markup '${markup}' does not contain either of the placeholders '__id__' or '__display__'`,
  );

  if (idIndex !== null && displayIndex !== null) {
    // both placeholders are used, return 0 or 1 depending on the position of the requested parameter
    return (parameterName === 'id' && idIndex <= displayIndex) ||
      (parameterName === 'display' && displayIndex <= idIndex)
      ? 0
      : 1;
  }

  // just one placeholder is being used, we'll use the captured string for both parameters
  return 0;
};

export default findPositionOfCapturingGroup;
