import type { CSSProperties } from 'react';

type MentionProps = {
  color?: CSSProperties['backgroundColor'];
  display: string;
};

const Mention = ({ color = 'yellow', display }: MentionProps) => (
  <strong
    style={{
      color: 'transparent',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit',
      backgroundColor: color,
    }}
  >
    {display}
  </strong>
);

export default Mention;
