import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import TextInputField from 'native/fields/TextInput';
import Box from '../components/Box';
import * as Yup from 'yup';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import Form from 'native/components/Form';
import OnboardingScreen from '../components/OnboardingScreen';

const validationSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
}).required();

type LoginValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: LoginValues = {
  password: '',
  confirmPassword: '',
};

const MyComponent = (): JSX.Element => {
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
            console.log(value);
          }}
        >
          <Box flex={7} justify="flex-start">
            <View style={styles.field}>
              <TextInputField
                style={styles.field}
                name="password"
                label="Password"
                type="password"
                helperText="Password must be of 8 characters"
              />
            </View>
            <View style={styles.field}>
              <TextInputField
                style={styles.field}
                name="confirmPassword"
                label="Re-enter Password"
                type="password"
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

export default MyComponent;
