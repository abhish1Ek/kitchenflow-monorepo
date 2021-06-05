import React from 'react';
import Select, { ISelect } from 'native/components/Select';
import { IFieldProps } from '../types';
import { injectFieldHandlerHoc } from '../utility/injectFieldHandlerHoc';

interface IRadioField extends Omit<ISelect, 'onChange'>, IFieldProps {}

const SelectInput: React.FC<IRadioField> = props => {
  const { value, onChangeValue, data, label, ...rest } = props;

  return (
    <Select
      value={value}
      onChange={onChangeValue}
      data={data}
      label={label}
      {...rest}
    />
  );
};

const SelectInputField = injectFieldHandlerHoc(SelectInput);

export default SelectInputField;
