export type CaretPosition = {
  top: number;
  left: number;
};

export type SuggestionData = {
  id: string;
  display?: string;
};

export type SuggestionDataSource = {
  data:
    | Array<SuggestionData>
    | ((query: string) => Array<SuggestionData>)
    | ((query: string) => Promise<Array<SuggestionData>>);
  regex?: RegExp;
  markup?: string;
  trigger?: string;
  ignoreAccents?: boolean;
  appendSpaceOnAdd?: boolean;
  allowSpaceInQuery?: boolean;
  onAdd?: (suggestion: SuggestionData, start: number, end: number) => void;
  displayTransform?: (id: string, display?: string) => string;
};

export type SuggestionsQueryInfo = {
  query: string;
  plainTextValue: string;
  dataSourceIndex: number;
  querySequenceStart: number;
  querySequenceEnd: number;
};

export type SuggestionsMap = {
  [index: number]: {
    results: Array<SuggestionData>;
    queryInfo: SuggestionsQueryInfo;
  };
};

export type MentionData = {
  id: string;
  index: number;
  display: string;
  plainTextIndex: number;
  dataSourceIndex: number;
};
