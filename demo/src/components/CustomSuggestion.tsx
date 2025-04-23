import { useState } from 'react';

import { Chip, List, Paper, TextField } from '@mui/material';

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
  <List
    {...props}
    dense
    sx={{ gap: 1, display: 'flex', padding: 1, flexWrap: 'wrap' }}
  />
);

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
        InputComponent={Input}
        SuggestionComponent={Suggestion}
        SuggestionsComponent={Paper}
        SuggestionsListComponent={SuggestionsList}
        dataSources={[
          {
            data: starWarsDataSource,
            displayTransform: (id, display) => `@${display ?? id}`,
          },
        ]}
      />
    </div>
  );
};

export default CustomSuggestion;
