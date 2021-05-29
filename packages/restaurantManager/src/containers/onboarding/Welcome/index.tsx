import ScreenContainer from 'native/layouts/ScreenContainer';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import onboardingHomeGraphic from 'common/assets/images/background/onboardingHomeGraphic.png';
import Box from '../components/Box';
import SubmitButton from 'native/components/SubmitButton';
import Title from 'native/typography/Title';
import Body from 'native/typography/Body';
import { useNavigation } from '@react-navigation/core';
import { ROUTE_NAMES } from '../../../Routes/routes';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer>
      <ImageBackground
        style={styles.imageBackground}
        resizeMethod="auto"
        resizeMode="contain"
        source={onboardingHomeGraphic}
      />
      <Box flex={4} justify="center" style={styles.textView}>
        <Title style={styles.text} align="center" size={36}>
          Welcome
        </Title>
        <Body style={styles.text} align="center" size={15}>
          manage a safe, accurate and efficient kitchen from anywhere
        </Body>

        <SubmitButton
          style={styles.button}
          onPress={() => {
            navigation.navigate(ROUTE_NAMES.Onboarding_Landing);
          }}
        >
          Let's Start
        </SubmitButton>
      </Box>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
  },
  textView: {
    paddingHorizontal: 15,
  },
  imageBackground: {
    flex: 6,
    backgroundColor: '#FFFAF8',
  },
  button: {
    marginTop: 35,
  },
});

export default Welcome;
