import normalizeString from './normalize-string';

const getSubstringIndex = (
  str: string,
  substr: string,
  ignoreAccents?: boolean,
) => {
  if (!ignoreAccents) {
    return str.toLowerCase().indexOf(substr.toLowerCase());
  }

  return normalizeString(str).indexOf(normalizeString(substr));
};

export default getSubstringIndex;
