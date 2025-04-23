import { useState } from 'react';

import { MentionsInput } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Multiline = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Multiline</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        multiline
        dataSources={[{ data: starWarsDataSource }]}
      />
    </div>
  );
};

export default Multiline;
