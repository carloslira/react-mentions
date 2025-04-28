import { useState } from 'react';

import {
  List,
  Paper,
  TextField,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import type { SuggestionProps } from '../../../src';

import { MentionsInput, renderSuggestionContent } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Suggestion = ({
  query,
  focused,
  suggestion,
  ignoreAccents,
  ...rest
}: SuggestionProps) => (
  <ListItemButton {...rest} selected={focused}>
    <ListItemText
      primary={renderSuggestionContent(suggestion, query, ignoreAccents)}
    />
  </ListItemButton>
);

const MuiMultiline = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Mui Multiline</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        multiline
        dataSources={[{ data: starWarsDataSource }]}
        components={{
          Suggestion,
          Suggestions: Paper,
          SuggestionsList: List,
        }}
        componentsProps={{
          suggestionsList: {
            dense: true,
          },
        }}
        renderInput={(props) => (
          <TextField
            rows={6}
            multiline
            fullWidth
            slotProps={{ htmlInput: props }}
          />
        )}
      />
    </div>
  );
};

export default MuiMultiline;
