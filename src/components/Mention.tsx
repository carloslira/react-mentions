import type { CSSProperties } from 'react';

type MentionProps = {
  color?: CSSProperties['backgroundColor'];
  display: string;
};

const Mention = ({ color = 'yellow', display }: MentionProps) => (
  <span
    style={{
      color: 'transparent',
      position: 'relative',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      letterSpacing: 'inherit',
    }}
  >
    {display}
    <span
      style={{
        inset: 0,
        position: 'absolute',
        borderRadius: '3px',
        backgroundColor: color,
      }}
    />
  </span>
);

export default Mention;
