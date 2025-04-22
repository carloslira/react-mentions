import Placeholders from './placeholders';

const makeMentionsMarkup = (markup: string, id: string, display?: string) => {
  return markup
    .replace(Placeholders.id, id)
    .replace(Placeholders.display, display ?? id);
};

export default makeMentionsMarkup;
