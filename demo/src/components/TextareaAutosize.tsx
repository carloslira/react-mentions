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
        components={{
          Input: TextareaAutosize,
        }}
      />
    </div>
  );
};

export default Multiline;
