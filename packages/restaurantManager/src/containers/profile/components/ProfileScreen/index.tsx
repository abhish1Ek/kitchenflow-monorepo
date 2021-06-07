import ScreenContainer from 'native/layouts/ScreenContainer';
import React from 'react';

const ProfileScreen: React.FC = props => {
  return (
    <ScreenContainer style={{ backgroundColor: '#FAFAFA' }}>
      {props.children}
    </ScreenContainer>
  );
};

export default ProfileScreen;
