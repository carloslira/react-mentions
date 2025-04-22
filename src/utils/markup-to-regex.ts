import { DefaultMarkupTemplate } from '../constants';

import Placeholders from './placeholders';

import escapeRegex from './escape-regex';

const markupToRegex = (markup = DefaultMarkupTemplate) => {
  const escapedMarkup = escapeRegex(markup);

  const charAfterDisplay =
    markup[markup.indexOf(Placeholders.display) + Placeholders.display.length];

  const charAfterId =
    markup[markup.indexOf(Placeholders.id) + Placeholders.id.length];

  return new RegExp(
    escapedMarkup
      .replace(
        Placeholders.display,
        `([^${escapeRegex(charAfterDisplay || '')}]+?)`,
      )
      .replace(Placeholders.id, `([^${escapeRegex(charAfterId || '')}]+?)`),
  );
};

export default markupToRegex;
