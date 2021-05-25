import React, { memo } from 'react';
import { TextInput, Platform } from 'react-native';
import InputText, { ITextInput } from '../../components/InputText';
import { IFieldProps } from '../types';
import { injectFieldHandlerHoc } from '../utility/injectFieldHandlerHoc';

type IFieldPropsKeys = keyof IFieldProps | 'onChangeText';

type ITextInputFieldProps = IFieldProps & Omit<ITextInput, IFieldPropsKeys>;

Platform.select({
  web: 33,
  native: 23,
  default: 99,
});

const Input = React.forwardRef<TextInput, ITextInputFieldProps>(
  (props, ref) => {
    const { errorMessage, onChangeValue, value, ...inputProps } = props;

    return (
      <>
        <InputText
          ref={ref}
          onChangeText={val => {
            console.log(val);
            onChangeValue(val);
          }}
          value={props.value}
          errorMessage={errorMessage}
          {...inputProps}
        />
      </>
    );
  },
);

const TextInputField = injectFieldHandlerHoc(Input);

export default memo(TextInputField);
