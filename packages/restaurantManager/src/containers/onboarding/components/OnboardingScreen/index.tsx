import React from 'react';
import ScreenContainer from 'native/layouts/ScreenContainer';
import HeadingBox, { IHeadingBox } from '../HeadingBox';
import Box from '../Box';

interface IOnboardingScreen extends IHeadingBox {}

const OnboardingScreen: React.FC<IOnboardingScreen> = props => {
  return (
    <ScreenContainer>
      <HeadingBox
        title={props.title}
        subTitle={props.subTitle}
        description={props.description}
      />

      <Box flex={7}>{props.children}</Box>
    </ScreenContainer>
  );
};

export default OnboardingScreen;
