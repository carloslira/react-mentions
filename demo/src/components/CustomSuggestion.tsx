import { useState } from 'react';

import { Chip, List, Paper, TextField } from '@mui/material';

import type { SuggestionProps } from '../../../src';

import { MentionsInput, renderSuggestionContent } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Suggestion = ({
  query,
  suggestion,
  ignoreAccents,
  ...rest
}: SuggestionProps) => (
  <Chip
    {...rest}
    label={renderSuggestionContent(suggestion, query, ignoreAccents)}
    clickable
  />
);

const CustomSuggestion = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Custom Suggestion</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        components={{
          Suggestion,
          Suggestions: Paper,
          SuggestionsList: List,
        }}
        componentsProps={{
          mention: {
            style: {
              textDecoration: 'underline',
              backgroundColor: 'lightblue',
              textDecorationColor: 'black',
            },
          },
          suggestions: {
            sx: {
              padding: 2,
            },
          },
          suggestionsList: {
            dense: true,
            sx: {
              gap: 1,
              display: 'flex',
              padding: 1,
              flexWrap: 'wrap',
            },
          },
        }}
        dataSources={[
          {
            data: starWarsDataSource,
            displayTransform: (id, display) => `@${display ?? id}`,
          },
        ]}
        renderInput={(props) => (
          <TextField fullWidth slotProps={{ htmlInput: props }} />
        )}
      />
    </div>
  );
};

export default CustomSuggestion;
