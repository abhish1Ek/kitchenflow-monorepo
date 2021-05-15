import React from 'react';
import { Text } from 'react-native';
import { Subheading, TextInput, Title, Paragraph } from 'react-native-paper';
import InputText from 'native/components/InputText';
import SubmitButton from 'native/components/SubmitButton';
import ScreenContainer from 'native/layouts/ScreenContainer';
import Box from './Box';
import Bullet from './Bullet';

const MyComponent = (): JSX.Element => {
  return (
    <ScreenContainer>
      <Box flex={4} style={{ width: '80%' }}>
        <Title style={{ fontSize: 24 }}>Let's start</Title>
        <Subheading>to manage your services</Subheading>
        <Paragraph>
          enter your registered mail id assoiciated with kitchen flow
        </Paragraph>
      </Box>
      <Box flex={1}>
        <InputText
          label="Email"
          left={<TextInput.Icon name="email-outline" size={25} />}
        />
      </Box>
      <Box flex={2}>
        <SubmitButton onPress={() => {}}>Continue</SubmitButton>
      </Box>
      <Box flex={4}>
        <Text style={{ marginBottom: 10 }}>Instructions</Text>

        {Array(5)
          .fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed')
          .map((s, index) => (
            <Bullet key={index}>{s}</Bullet>
          ))}
      </Box>
    </ScreenContainer>
  );
};

export default MyComponent;
