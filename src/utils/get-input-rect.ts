function getInputRect(input: HTMLInputElement | HTMLTextAreaElement | null) {
  const rect = { x: 0, y: 0, width: 0, height: 0 };
  if (!input) {
    return rect;
  }

  const computedStyle = getComputedStyle(input);
  rect.width = input.clientWidth;
  rect.width -= parseFloat(computedStyle.paddingLeft);
  rect.width -= parseFloat(computedStyle.paddingRight);

  rect.height = input.clientHeight;
  rect.height -= parseFloat(computedStyle.paddingTop);
  rect.height -= parseFloat(computedStyle.paddingBottom);

  rect.x = input.offsetLeft;
  rect.x += parseFloat(computedStyle.paddingLeft);
  rect.x += parseFloat(computedStyle.borderLeft);

  rect.y = input.offsetTop;
  rect.y += parseFloat(computedStyle.paddingTop);
  rect.y += parseFloat(computedStyle.borderTop);

  return rect;
}

export default getInputRect;
