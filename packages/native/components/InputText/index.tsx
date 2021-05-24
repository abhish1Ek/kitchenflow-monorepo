import React, { useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { TextInput as TextInputPaper } from 'react-native-paper';
import getInputTypeProp from './getInputTypeProps';

export type InputType = 'email' | 'password' | 'digits' | 'name';

type ITextInputPaper = React.ComponentProps<typeof TextInputPaper>;

export type ITextInput = Omit<ITextInputPaper, 'error'> & {
  errorMessage?: string;
  type?: InputType;
};

const InputText = React.forwardRef<TextInput, ITextInput>((props, ref) => {
  const { errorMessage, type, ...inputProps } = props;

  const inputTypeProps = useMemo(() => getInputTypeProp(type), [type]);

  return (
    <View>
      <TextInputPaper
        ref={ref}
        {...inputTypeProps}
        {...inputProps}
        style={{
          backgroundColor: '#FCFCFC',
          // padding: 0,
          paddingBottom: 0,
          // paddingHorizontal: 0,
        }}
      />
      {!!errorMessage && (
        <HelperText style={{ paddingHorizontal: 0 }} type="info">
          {errorMessage}
        </HelperText>
      )}
    </View>
  );
});

export default InputText;
