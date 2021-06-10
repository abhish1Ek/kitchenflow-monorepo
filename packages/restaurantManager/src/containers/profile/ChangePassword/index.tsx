import Header from 'native/components/Header';
import React from 'react';
import ProfileScreen from '../components/ProfileScreen';
import * as Yup from 'yup';
import YupValidations from 'common/utility/yupValidations';
import { getFieldKeys } from 'common/utility/form';
import Form from 'native/components/Form';
import FieldRow from 'native/components/FieldRow';
import TextInput from 'native/fields/TextInput';
import ContentContainer from '../components/ContentContainer';

const validationSchema = Yup.object({
  oldPassword: YupValidations.password(),
  newPassword: YupValidations.password(),
  confirmPassword: YupValidations.password().oneOf(
    [Yup.ref('newPassword'), null],
    'Passwords must match',
  ),
});

type FormValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: FormValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const formKeys = getFieldKeys(initialValues);

const ChangePassword: React.FC = () => {
  return (
    <ProfileScreen>
      <Header title="Change Password" />
      <Form
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <ContentContainer
          title="it’s not that tough"
          description="easily change your password by entering new one and be secure
              always"
          submitLabel="Reset"
        >
          <FieldRow columns={1}>
            <TextInput
              name={formKeys.oldPassword}
              label="Current Password"
              type="password"
              helperText="Password must be of 8 characters"
            />
            <TextInput
              name={formKeys.newPassword}
              label="New Password"
              type="newPassword"
              helperText="Password must be of 8 characters"
            />
            <TextInput
              name={formKeys.confirmPassword}
              label="Confirm New Password"
              type="newPassword"
              helperText="Password must be of 8 characters"
            />
          </FieldRow>
        </ContentContainer>
      </Form>
    </ProfileScreen>
  );
};

export default ChangePassword;
