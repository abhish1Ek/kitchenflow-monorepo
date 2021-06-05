import React from 'react';
import RadioInputBase, { IRadioInput } from 'native/components/RadioInput';
import { IFieldProps } from '../types';
import { injectFieldHandlerHoc } from '../utility/injectFieldHandlerHoc';

interface IRadioField extends Omit<IRadioInput, 'onChange'>, IFieldProps {}

const RadioInput: React.FC<IRadioField> = props => {
  const { value, onChangeValue, data, label } = props;

  return (
    <RadioInputBase
      value={value}
      onChange={onChangeValue}
      data={data}
      label={label}
    />
  );
};

const RadioInputField = injectFieldHandlerHoc(RadioInput);

export default RadioInputField;
