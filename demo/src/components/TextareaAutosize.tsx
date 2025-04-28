import { useState } from 'react';

import TextareaAutosize from 'react-textarea-autosize';

import { MentionsInput } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Multiline = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Textarea Autosize</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        multiline
        dataSources={[{ data: starWarsDataSource }]}
        renderInput={({ ref, style, ...props }) => (
          // @ts-expect-error ref is giving unknown type error, probably because of React 19 and 16 diff.
          <TextareaAutosize ref={ref} style={style} {...props} />
        )}
      />
    </div>
  );
};

export default Multiline;
