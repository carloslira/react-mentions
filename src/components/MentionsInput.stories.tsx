import type { Meta, StoryObj } from '@storybook/react';

import { useState, forwardRef } from 'react';

import renderSuggestionContent from '../utils/render-suggestion-content';

import type { InputProps } from './Input';
import type { SuggestionProps } from './Suggestion';
import type { SuggestionsProps } from './Suggestions';
import type { SuggestionsListProps } from './SuggestionsList';

import type { MentionsInputProps } from './MentionsInput';
import MentionsInput from './MentionsInput';

const starWarsDataSource = [
  { id: 'luke', display: 'Luke Skywalker' },
  { id: 'leia', display: 'Leia Organa' },
  { id: 'han', display: 'Han Solo' },
  { id: 'vader', display: 'Darth Vader' },
  { id: 'yoda', display: 'Yoda' },
  { id: 'obiwan', display: 'Obi-Wan Kenobi' },
  { id: 'palpatine', display: 'Emperor Palpatine' },
  { id: 'chewbacca', display: 'Chewbacca' },
  { id: 'lando', display: 'Lando Calrissian' },
  { id: 'boba', display: 'Boba Fett' },
  { id: 'anakin', display: 'Anakin Skywalker' },
  { id: 'padme', display: 'Padmé Amidala' },
];

const meta = {
  tags: ['autodocs'],
  title: 'MentionsInput',
  component: MentionsInput,
} satisfies Meta<typeof MentionsInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = <Multiline extends boolean>(
  args: MentionsInputProps<Multiline>,
) => {
  const [value, setValue] = useState('');

  return <MentionsInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: Template,
  args: {
    dataSources: [
      {
        data: starWarsDataSource,
      },
    ],
  },
};

export const Multiline: Story = {
  render: Template,
  args: {
    multiline: true,
    dataSources: [
      {
        data: starWarsDataSource,
      },
    ],
  },
};

export const CustomHighlightColor: Story = {
  render: Template,
  args: {
    highlightColor: 'blue',
    dataSources: [
      {
        data: starWarsDataSource,
      },
    ],
  },
};

export const DisplayTransform: Story = {
  render: Template,
  args: {
    dataSources: [
      {
        data: starWarsDataSource,
        displayTransform: (id, display) => `@${display ?? id}`,
      },
    ],
  },
};

const Input = forwardRef<HTMLInputElement, InputProps<HTMLInputElement>>(
  ({ style, ...rest }, ref) => (
    <input ref={ref} {...rest} style={{ ...style }} />
  ),
);

const Suggestions = (props: SuggestionsProps) => (
  <div {...props} style={{ padding: '8px 12px 8px', backgroundColor: 'red' }} />
);

const SuggestionsList = forwardRef<HTMLUListElement, SuggestionsListProps>(
  ({ style, ...rest }, ref) => (
    <ul ref={ref} {...rest} style={{ ...style, backgroundColor: 'blue' }} />
  ),
);

const Suggestion = ({
  index,
  query,
  focused,
  suggestion,
  ignoreAccents,
  ...rest
}: SuggestionProps) => (
  <li
    {...rest}
    style={{
      color: 'white',
      cursor: 'pointer',
      marginTop: index === 0 || index === starWarsDataSource.length ? 0 : 4,
      backgroundColor: focused ? 'yellow' : 'green',
    }}
  >
    {renderSuggestionContent(suggestion, query, ignoreAccents)}
  </li>
);

export const CustomComponents: Story = {
  render: Template,
  args: {
    // @ts-expect-error This should work outside this scope because of the generic aspect of MentionsInput.
    InputComponent: Input,
    SuggestionComponent: Suggestion,
    SuggestionsComponent: Suggestions,
    SuggestionsListComponent: SuggestionsList,
    dataSources: [
      {
        data: starWarsDataSource,
      },
    ],
  },
};
