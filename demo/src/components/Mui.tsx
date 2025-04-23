import { useState } from 'react';

import {
  List,
  Paper,
  TextField,
  ListItemText,
  ListItemButton,
} from '@mui/material';

import type {
  InputProps,
  SuggestionProps,
  SuggestionsListProps,
} from '../../../src';

import { MentionsInput, renderSuggestionContent } from '../../../src';

import { starWarsDataSource } from '../data-sources';

const Input = ({ ref, ...props }: InputProps<HTMLInputElement>) => (
  // @ts-expect-error for some reason some refs are with type error
  <TextField inputRef={ref} slotProps={{ htmlInput: props }} fullWidth />
);

const SuggestionsList = (props: SuggestionsListProps) => (
  // @ts-expect-error for some reason some refs are with type error
  <List dense {...props} />
);

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

const Mui = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <p>Mui</p>
      <MentionsInput
        value={value}
        onChange={setValue}
        dataSources={[{ data: starWarsDataSource }]}
        InputComponent={Input}
        SuggestionComponent={Suggestion}
        SuggestionsComponent={Paper}
        SuggestionsListComponent={SuggestionsList}
      />
    </div>
  );
};

export default Mui;
