import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import TextInputField from 'native/fields/TextInput';
import Box from '../components/Box';
import * as Yup from 'yup';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import Form from 'native/components/Form';
import OnboardingScreen from '../components/OnboardingScreen';
import { getFieldKeys } from 'common/utility/form';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required('Password is required'),
}).required();

type LoginValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: LoginValues = {
  password: '',
  email: '',
};

const formKeys = getFieldKeys(initialValues);

const Login = (): JSX.Element => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <OnboardingScreen
        title="Enter Account"
        subTitle="to start working"
        description="enter your registered mail id with the password shared by admin"
      >
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={value => {
            console.log(value);
          }}
        >
          <Box flex={7} justify="flex-start">
            <View style={styles.field}>
              <TextInputField
                name={formKeys.email}
                label="Email"
                type="email"
              />
            </View>
            <View style={styles.field}>
              <TextInputField
                name={formKeys.password}
                label="Password"
                type="password"
              />
            </View>
            <View style={{ marginTop: 35 }}>
              <FormSubmitButton style={styles.field}>Login</FormSubmitButton>
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

export default Login;
