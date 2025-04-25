import type { ComponentProps } from 'react';

const Mention = ({ style, ...rest }: ComponentProps<'strong'>) => (
  <strong
    style={{
      color: 'transparent',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      ...style,
    }}
    {...rest}
  />
);

export default Mention;
