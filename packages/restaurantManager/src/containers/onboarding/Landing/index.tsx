import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import TextInputField from 'native/fields/TextInput';
import Box from '../components/Box';
import Bullet from './Bullet';
import * as Yup from 'yup';
import FormSubmitButton from 'native/fields/FormSubmitButton';
import Form from 'native/components/Form';
import OnboardingScreen from '../components/OnboardingScreen';
import useKeyboard from 'native/hooks';
import { getFieldKeys } from 'common/utility/form';
import BottomHalfModal from './EnterOtp';
import { useNavigation } from '@react-navigation/core';
import { ROUTE_NAMES } from '../../../Routes/routes';

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
}).required();

type LoginValues = Yup.TypeOf<typeof validationSchema>;

const initialValues: LoginValues = {
  email: '',
};

const formKeys = getFieldKeys(initialValues);

const MyComponent = (): JSX.Element => {
  const [isVisible] = useKeyboard();

  const [showModal, toggleModal] = useState(false);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <OnboardingScreen
        title="Let's start"
        subTitle="to manage your services"
        description="enter your registered mail id assoiciated with kitchen flow"
      >
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={value => {
            console.log(value);
            toggleModal(true);
          }}
        >
          <Box flex={3} justify="space-evenly">
            <TextInputField
              name={formKeys.email}
              label="Email"
              type="email"
              left={<TextInput.Icon name="email-outline" size={25} />}
            />

            <FormSubmitButton>continue</FormSubmitButton>
          </Box>
        </Form>

        {!isVisible && (
          <Box flex={4}>
            <Text style={{ marginBottom: 10 }}>Instructions</Text>
            {Array(5)
              .fill(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
              )
              .map((s, index) => (
                <Bullet key={index}>{s}</Bullet>
              ))}
          </Box>
        )}
      </OnboardingScreen>
      <BottomHalfModal
        open={showModal}
        onClose={() => toggleModal(false)}
        onSuccess={() => {
          navigation.navigate(ROUTE_NAMES.Onboarding_EmailVaerified);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default MyComponent;
