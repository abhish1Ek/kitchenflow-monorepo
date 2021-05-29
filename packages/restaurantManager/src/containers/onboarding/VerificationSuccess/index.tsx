import ScreenContainer from 'native/layouts/ScreenContainer';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import tickSuccess from 'common/assets/images/background/tickSuccess.png';
import SubmitButton from 'native/components/SubmitButton';
import Subtitle from 'native/typography/Subtitle';
import { useNavigation } from '@react-navigation/core';
import { ROUTE_NAMES } from '../../../Routes/routes';

const VerificationSuccess: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScreenContainer style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        resizeMethod="auto"
        resizeMode="contain"
        source={tickSuccess}
      />
      <View style={styles.contentContainer}>
        <Subtitle style={{ color: '#2D2D2D' }} weight="500" align="center">
          congratulations you have successfully verefied your profile
        </Subtitle>
        <SubmitButton
          onPress={() => {
            navigation.navigate(ROUTE_NAMES.Onboarding_CreatePassword);
          }}
          style={{ marginTop: 35 }}
        >
          Continue
        </SubmitButton>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15, backgroundColor: 'rgba(252, 252, 252, 0.6)' },
  imageBackground: { flex: 6.5 },
  contentContainer: { flex: 3.5, justifyContent: 'center' },
});

export default VerificationSuccess;
