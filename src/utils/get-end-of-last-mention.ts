import type { SuggestionDataSource } from '../types';

import getMentions from './get-mentions';

const getEndOfLastMention = (
  value: string,
  dataSources: Array<SuggestionDataSource>,
) => {
  const mentions = getMentions(value, dataSources);
  const lastMention = mentions[mentions.length - 1];

  return lastMention
    ? lastMention.plainTextIndex + lastMention.display.length
    : 0;
};

export default getEndOfLastMention;
