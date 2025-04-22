import lettersDiacritics from './diacritics';

const removeAccents = (str: string) => {
  let formattedStr = str;

  lettersDiacritics.forEach((letterDiacritics) => {
    formattedStr = formattedStr.replace(
      letterDiacritics.letters,
      letterDiacritics.base,
    );
  });

  return formattedStr;
};

export default removeAccents;
