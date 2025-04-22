function DefaultDisplayTransform(
  id: string,
  display?: string,
  convertSpaces?: boolean,
): string {
  if (!convertSpaces) {
    return display ?? id;
  }

  return display?.replace(/ /g, '\u00A0') ?? id.replace(/ /g, '\u00A0');
}

export default DefaultDisplayTransform;
