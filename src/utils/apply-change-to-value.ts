import type { SuggestionDataSource } from '../types';

import spliceString from './splice-string';
import getPlainText from './get-plain-text';
import mapPlainTextIndex from './map-plain-text-index';

/**
 * Applies a change to a value string based on the provided plain text value and selection details.
 * This function is commonly used to handle text input changes, including handling mentions or
 * suggestions in a text editor-like environment.
 *
 * @param value - The original value string, which may include special formatting or mentions.
 * @param plainTextValue - The updated plain text value after the change.
 * @param selectionStartBefore - The starting position of the selection before the change. Can be `null`.
 * @param selectionEndBefore - The ending position of the selection before the change. Can be `null`.
 * @param selectionEndAfter - The ending position of the selection after the change.
 * @param dataSources - An array of data sources used to map mentions or other special entities in the value.
 * @returns The updated value string with the applied changes.
 */
const applyChangeToValue = (
  value: string,
  plainTextValue: string,
  selectionStartBefore: number | null,
  selectionEndBefore: number | null,
  selectionEndAfter: number,
  dataSources: Array<SuggestionDataSource>,
) => {
  const oldPlainTextValue = getPlainText(value, dataSources);

  const lengthDelta = oldPlainTextValue.length - plainTextValue.length;
  if (selectionStartBefore === null) {
    selectionStartBefore = selectionEndAfter + lengthDelta;
  }

  if (selectionEndBefore === null) {
    selectionEndBefore = selectionStartBefore;
  }

  // Fixes an issue with replacing combined characters for complex input. Eg like acented letters on OSX
  if (
    selectionStartBefore === selectionEndBefore &&
    selectionEndBefore === selectionEndAfter &&
    oldPlainTextValue.length === plainTextValue.length
  ) {
    selectionStartBefore = selectionStartBefore - 1;
  }

  // extract the insertion from the new plain text value
  let insert = plainTextValue.slice(selectionStartBefore, selectionEndAfter);

  // handling for Backspace key with no range selection
  let spliceStart = Math.min(selectionStartBefore, selectionEndAfter);

  let spliceEnd = selectionEndBefore;
  if (selectionStartBefore === selectionEndAfter) {
    // handling for Delete key with no range selection
    spliceEnd = Math.max(
      selectionEndBefore,
      selectionStartBefore + lengthDelta,
    );
  }

  let mappedSpliceStart = mapPlainTextIndex(
    value,
    dataSources,
    spliceStart,
    'START',
  );

  let mappedSpliceEnd = mapPlainTextIndex(value, dataSources, spliceEnd, 'END');

  const controlSpliceStart = mapPlainTextIndex(
    value,
    dataSources,
    spliceStart,
    'NULL',
  );

  const controlSpliceEnd = mapPlainTextIndex(
    value,
    dataSources,
    spliceEnd,
    'NULL',
  );

  const willRemoveMention =
    controlSpliceStart === null || controlSpliceEnd === null;

  let newValue = spliceString(
    value,
    mappedSpliceStart ?? 0,
    mappedSpliceEnd ?? 0,
    insert,
  );

  if (!willRemoveMention) {
    // test for auto-completion changes
    const controlPlainTextValue = getPlainText(newValue, dataSources);
    if (controlPlainTextValue !== plainTextValue) {
      // some auto-correction is going on

      // find start of diff
      spliceStart = 0;
      while (plainTextValue[spliceStart] === controlPlainTextValue[spliceStart])
        spliceStart++;

      // extract auto-corrected insertion
      insert = plainTextValue.slice(spliceStart, selectionEndAfter);

      // find index of the unchanged remainder
      spliceEnd = oldPlainTextValue.lastIndexOf(
        plainTextValue.substring(selectionEndAfter),
      );

      // re-map the corrected indices
      mappedSpliceStart = mapPlainTextIndex(
        value,
        dataSources,
        spliceStart,
        'START',
      );
      mappedSpliceEnd = mapPlainTextIndex(value, dataSources, spliceEnd, 'END');
      newValue = spliceString(
        value,
        mappedSpliceStart ?? 0,
        mappedSpliceEnd ?? 0,
        insert,
      );
    }
  }

  return newValue;
};

export default applyChangeToValue;
