import { CSSProperties } from 'react';
import { ElementType } from 'react';
import { FocusEvent as FocusEvent_2 } from 'react';
import { HTMLProps } from 'react';
import { JSX } from 'react/jsx-runtime';
import { KeyboardEventHandler } from 'react';
import { ReactEventHandler } from 'react';

export declare type MentionData = {
    id: string;
    index: number;
    display: string;
    plainTextIndex: number;
    dataSourceIndex: number;
};

export declare const MentionsInput: <Multiline extends boolean>({ value, multiline, dataSources, ignoreAccents, highlightColor, InputComponent: InputComponentProp, SuggestionComponent, SuggestionsComponent, SuggestionsListComponent, onBlur, onSelect, onChange, onKeyDown, }: MentionsInputProps<Multiline>) => JSX.Element;

declare type MentionsInputElement<Multiline extends boolean> = Multiline extends true ? HTMLTextAreaElement : HTMLInputElement;

export declare type MentionsInputProps<Multiline extends boolean> = {
    value?: string;
    multiline?: Multiline;
    dataSources: Array<SuggestionDataSource>;
    ignoreAccents?: boolean;
    highlightColor?: CSSProperties['backgroundColor'];
    InputComponent?: ElementType<HTMLProps<MentionsInputElement<Multiline>>>;
    SuggestionComponent?: ElementType<SuggestionProps>;
    SuggestionsComponent?: ElementType<HTMLProps<HTMLDivElement>>;
    SuggestionsListComponent?: ElementType<HTMLProps<HTMLUListElement>>;
    onBlur?: (event: FocusEvent_2, clickedSuggestion: boolean) => void;
    onSelect?: ReactEventHandler<MentionsInputElement<Multiline>>;
    onChange?: (newValue: string, plainTextValue: string, mentions: Array<MentionData>) => void;
    onKeyDown?: KeyboardEventHandler<MentionsInputElement<Multiline>>;
};

export declare type SuggestionData = {
    id: string;
    display?: string;
};

export declare type SuggestionDataSource = {
    data: Array<SuggestionData> | ((query: string) => Promise<Array<SuggestionData>>);
    regex?: RegExp;
    markup?: string;
    trigger?: string;
    ignoreAccents?: boolean;
    appendSpaceOnAdd?: boolean;
    allowSpaceInQuery?: boolean;
    onAdd?: (suggestion: SuggestionData, start: number, end: number) => void;
    displayTransform?: (id: string, display?: string) => string;
};

declare type SuggestionProps = HTMLProps<HTMLLIElement> & {
    index: number;
    query: string;
    focused?: boolean;
    suggestion: SuggestionData;
    ignoreAccents?: boolean;
};

export declare type SuggestionsQueryInfo = {
    query: string;
    plainTextValue: string;
    dataSourceIndex: number;
    querySequenceStart: number;
    querySequenceEnd: number;
};

export { }
