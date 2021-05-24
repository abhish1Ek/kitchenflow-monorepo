import { TextInput, TextInputProps } from 'react-native';
import { InputType } from '.';

type InputTypeProps = Partial<
  Pick<
    TextInputProps,
    'autoCorrect' | 'keyboardType' | 'autoCapitalize' | 'secureTextEntry'
  >
>;

const getInputTypeProp = (type: InputType): InputTypeProps => {
  switch (type) {
    case 'email':
      return {
        autoCorrect: false,
        keyboardType: 'email-address',
        autoCapitalize: 'none',
      };
    case 'password':
      return {
        autoCorrect: false,
        secureTextEntry: true,
        autoCapitalize: 'none',
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
