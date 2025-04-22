import type { MentionData, SuggestionDataSource } from '../types';

import iterateMentionsMarkup from './iterate-mentions-markup';

const getMentions = (
  value: string,
  dataSources: Array<SuggestionDataSource>,
) => {
  const mentions: Array<MentionData> = [];

  iterateMentionsMarkup(
    value,
    dataSources,
    (_match, index, plainTextIndex, id, display, dataSourceIndex) => {
      mentions.push({
        id,
        index,
        display,
        plainTextIndex,
        dataSourceIndex,
      });
    },
  );

  return mentions;
};

export default getMentions;
