import React from 'react';
import { Form, Field } from 'react-final-form'
import { useTheme } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const SearchForm = (props) => {
  const theme = useTheme();

  return (
    <Form
        onSubmit={props.onSubmit}
        render={({ handleSubmit }) => (
        <Field name="search" placeholder="Green Nature..." >
            {({ input, meta, placeholder }) => {
                return (
                    <TextInput
                        label={"Search"}
                        placeholder={placeholder}
                        onChangeText={text => handleSubmit(text)}
                        {...input}
                        style={{color: theme.colors.secondary, backgroundColor: theme.colors.accent}}
                        selectionColor={theme.colors.surface}
                        underlineColor={theme.colors.surface}
                    />
                )
            }}
        </Field>
        )}
    />
    );
};

export default SearchForm
