import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ScreenContainer from 'native/layouts/ScreenContainer';
import HeadingBox, { IHeadingBox } from '../HeadingBox';
import commonCircle from 'common/assets/images/background/cornerCircle.png';
import Box from '../Box';

interface IOnboardingScreen extends IHeadingBox {
  cornerCircle?: boolean;
}

const OnboardingScreen: React.FC<IOnboardingScreen> = props => {
  const { cornerCircle } = props;

  return (
    <ScreenContainer style={styles.container}>
      <HeadingBox
        title={props.title}
        subTitle={props.subTitle}
        description={props.description}
      />

      <Box flex={7}>{props.children}</Box>
      {cornerCircle && (
        <Image
          source={commonCircle}
          resizeMethod="auto"
          resizeMode="contain"
          style={styles.bottomCornerCircle}
        />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 15 },
  bottomCornerCircle: {
    bottom: -5,
    left: 0,
    position: 'absolute',
    width: 80,
    height: 80,
  },
});

OnboardingScreen.defaultProps = {
  cornerCircle: true,
};

export default OnboardingScreen;
