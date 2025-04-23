import { useState } from 'react';

import { MentionsInput } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Default = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Default</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        dataSources={[{ data: starWarsDataSource }]}
      />
    </div>
  );
};

export default Default;
