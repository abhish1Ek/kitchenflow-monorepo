import React, { useMemo } from 'react';
import { TextInput, View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { TextInput as TextInputPaper } from 'react-native-paper';
import getInputTypeProp from './getInputTypeProps';

export type InputType =
  | 'email'
  | 'password'
  | 'digits'
  | 'name'
  | 'newPassword'
  | 'phone'
  | 'content';

type ITextInputPaper = React.ComponentProps<typeof TextInputPaper>;

export type ITextInput = Omit<ITextInputPaper, 'error'> & {
  errorMessage?: string;
  type?: InputType;
  helperText?: string;
};

const InputText = React.forwardRef<TextInput, ITextInput>((props, ref) => {
  const { errorMessage, type, helperText, ...inputProps } = props;

  const inputTypeProps = useMemo(() => getInputTypeProp(type), [type]);

  return (
    <View>
      <TextInputPaper
        ref={ref}
        {...inputTypeProps}
        {...inputProps}
        style={[
          {
            backgroundColor: 'rgba(0,0,0,0.0)',
            // padding: 0,
            paddingBottom: 0,
            // paddingHorizontal: 0,
          },
          props.style,
        ]}
        error={!!errorMessage}
      />
      {!!errorMessage && (
        <HelperText style={{ paddingHorizontal: 0 }} type="error">
          {errorMessage}
        </HelperText>
      )}
      {!errorMessage && helperText && (
        <HelperText style={{ paddingHorizontal: 0 }} type="info">
          {helperText}
        </HelperText>
      )}
    </View>
  );
});

export default InputText;
