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
    | 'maxLength'
    | 'multiline'
    | 'numberOfLines'
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
        maxLength: 30,
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
        maxLength: 10,
      };
    case 'digits':
      return {
        keyboardType: 'phone-pad',
        maxLength: 100,
      };
    case 'name':
      return {
        autoCorrect: false,
        maxLength: 100,
      };
    case 'content':
      return {
        maxLength: 500,
        multiline: true,
        numberOfLines: 4,
      };
    default:
      return {};
  }
};

export default getInputTypeProp;
