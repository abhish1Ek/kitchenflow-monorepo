import React from 'react';
import { useFormikContext } from 'formik';
import { useTheme } from 'react-native-paper';
import SubmitButton, {
  TSubmitButtonProps,
} from '../../components/SubmitButton';
import BottomActionBar from 'native/components/BottomActionBar';

interface IFormSubmitButton
  extends Pick<TSubmitButtonProps, 'loading' | 'disabled' | 'style'> {}

const FormSubmitButton: React.FC<IFormSubmitButton> = props => {
  const { handleSubmit, isValid } = useFormikContext();
  const { loading, disabled, style } = props;
  const { colors } = useTheme();
  return (
    <SubmitButton
      onPress={() => handleSubmit()}
      loading={loading}
      disabled={disabled || loading}
      style={[
        !isValid ? { backgroundColor: '#bbbbbb', elevation: 0 } : undefined,
      ]}
    >
      {props.children}
    </SubmitButton>
  );
};

export default FormSubmitButton;
