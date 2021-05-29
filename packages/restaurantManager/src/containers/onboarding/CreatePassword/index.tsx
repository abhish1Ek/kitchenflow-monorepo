import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import TextInputField from 'native/fields/TextInput';
import Box from '../components/Box';
import * as Yup from 'yup';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import Form from 'native/components/Form';
import OnboardingScreen from '../components/OnboardingScreen';
import { getFieldKeys } from 'common/utility/form';
import { ROUTE_NAMES } from '../../../Routes/routes';
import { useNavigation } from '@react-navigation/core';

const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
}).required();

type CreatePasswordValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: CreatePasswordValues = {
  password: '',
  confirmPassword: '',
};

const formKeys = getFieldKeys(initialValues);

const CreatePassword = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <OnboardingScreen
        title="Create Password"
        subTitle="and we are good to go"
        description="easily generate your pasword to make your login credentials safe"
      >
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={value => {
            navigation.navigate(ROUTE_NAMES.Onboarding_Login);
          }}
        >
          <Box flex={7} justify="flex-start">
            <View style={styles.field}>
              <TextInputField
                style={styles.field}
                name={formKeys.password}
                label="Password"
                type="newPassword"
                helperText="Password must be of 8 characters"
              />
            </View>
            <View style={styles.field}>
              <TextInputField
                style={styles.field}
                name={formKeys.confirmPassword}
                label="Re-enter Password"
                type="newPassword"
                helperText="Both password must match"
              />
            </View>
            <View style={{ marginTop: 35 }}>
              <FormSubmitButton style={styles.field}>continue</FormSubmitButton>
            </View>
          </Box>
        </Form>
      </OnboardingScreen>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  field: {
    marginBottom: 10,
  },
});

export default CreatePassword;
