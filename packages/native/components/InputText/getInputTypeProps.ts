import { TextInput, TextInputProps } from 'react-native';
import { InputType } from '.';

type InputTypeProps = Partial<
  Pick<
    TextInputProps,
    | 'autoCorrect'
    | 'keyboardType'
    | 'autoCapitalize'
    | 'secureTextEntry'
    | 'textContentType'
    | 'passwordRules'
    | 'autoCompleteType'
  >
>;

const getInputTypeProp = (type?: InputType): InputTypeProps => {
  switch (type) {
    case 'email':
      return {
        autoCorrect: false,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        textContentType: 'emailAddress',
        autoCompleteType: 'email',
      };
    case 'password':
      return {
        autoCorrect: false,
        secureTextEntry: true,
        autoCapitalize: 'none',
        textContentType: 'password',
        autoCompleteType: 'password',
      };
    case 'newPassword':
      return {
        autoCorrect: false,
        secureTextEntry: true,
        autoCapitalize: 'none',
        textContentType: 'newPassword',
        passwordRules:
          'minlength: 10; maxlength: 20; required: lower; required: upper; required: digit; required: [-];',
      };
    case 'phone':
      return {
        keyboardType: 'phone-pad',
        textContentType: 'telephoneNumber',
        autoCompleteType: 'tel',
      };
    case 'digits':
      return {
        keyboardType: 'phone-pad',
      };
    case 'name':
      return {
        autoCorrect: false,
      };
    default:
      return {};
  }
};

export default getInputTypeProp;
