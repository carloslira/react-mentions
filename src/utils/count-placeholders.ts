import { DefaultMarkupTemplate } from '../constants';

const countPlaceholders = (markup = DefaultMarkupTemplate) => {
  let count = 0;

  if (markup.indexOf('__id__') >= 0) {
    count++;
  }

  if (markup.indexOf('__display__') >= 0) {
    count++;
  }

  return count;
};

export default countPlaceholders;
