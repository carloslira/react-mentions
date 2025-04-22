import removeAccents from './remove-accents';

const normalizeString = (str: string) => removeAccents(str).toLowerCase();

export default normalizeString;
