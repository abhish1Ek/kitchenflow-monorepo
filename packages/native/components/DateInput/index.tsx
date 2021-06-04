import React from 'react';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { TextInput, View } from 'react-native';
import { formatWithMask, Masks } from 'react-native-mask-input';
import InputText, { ITextInput } from '../InputText';

export interface IDateInput extends Omit<ITextInput, 'type'> {}

const DateInput = React.forwardRef<TextInput, IDateInput>((props, ref) => {
  const { value, onChangeText } = props;

  const { masked, unmasked, obfuscated } = formatWithMask({
    text: value,
    mask: Masks.DATE_DDMMYYYY,
  });

  return (
    <InputText
      type="digits"
      ref={ref}
      value={masked}
      onChangeText={onChangeText}
      left={<TextInputPaper.Icon name="calendar-blank-outline" size={25} />}
      placeholder="DD/MM/YYYY"
    />
  );
});

export default DateInput;
