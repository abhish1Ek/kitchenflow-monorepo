import Title from 'native/typography/Title';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SubmitButton from 'native/fields/FormSubmitButton';
import Subtitle from 'native/typography/Subtitle';
import * as Yup from 'yup';
import { getFieldKeys } from 'common/utility/form';
import OtpInputField from 'native/fields/OtpInput';
import Form from 'native/components/Form';
import BottomHalfModal from 'native/components/Modals/BottomHalfModal';

const validationSchema = Yup.object({
  otp: Yup.string()
    .matches(/\d{6,6}/)
    .required(),
});

type FormValues = Yup.TypeOf<typeof validationSchema>;

const intialValues: FormValues = {
  otp: '',
};

const formKeys = getFieldKeys(intialValues);

interface IBottomModal {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const EnterOtp: React.FC<IBottomModal> = props => {
  const { open, onClose } = props;

  return (
    <BottomHalfModal open={open} onClose={onClose}>
      <Title style={styles.text}>Verify Yourself</Title>
      <Subtitle style={styles.text}>
        code shared by admin on your registered mail id
      </Subtitle>
      <Subtitle style={styles.text} weight="400" size={16}>
        enter verification code
      </Subtitle>
      <Form
        initialValues={intialValues}
        validationSchema={validationSchema}
        onSubmit={() => {
          props.onClose();
          props.onSuccess();
        }}
      >
        <View style={{ justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <OtpInputField name={formKeys.otp} />
          </View>

          <SubmitButton style={{ marginTop: 35 }}>Continue</SubmitButton>
        </View>
      </Form>
    </BottomHalfModal>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginRight: 2,
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
  },
});

export default EnterOtp;
