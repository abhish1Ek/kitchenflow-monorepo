import React, { memo } from 'react';
import { TextInput } from 'react-native';
import DateInput, { IDateInput } from '../../components/DateInput';
import { IFieldProps } from '../types';
import { injectFieldHandlerHoc } from '../utility/injectFieldHandlerHoc';

type IFieldPropsKeys = keyof IFieldProps | 'onChangeText';

type ITextInputFieldProps = IFieldProps & Omit<IDateInput, IFieldPropsKeys>;

const Input = React.forwardRef<TextInput, ITextInputFieldProps>(
  (props, ref) => {
    const { errorMessage, onChangeValue, value, ...inputProps } = props;

    return (
      <>
        <DateInput
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
