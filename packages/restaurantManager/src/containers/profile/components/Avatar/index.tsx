import { PLACEHOLDER_URL } from 'native/constants';
import React from 'react';
import { ViewStyle } from 'react-native';
import { Avatar as AvatarBase } from 'react-native-paper';

interface IAvatar {
  style?: ViewStyle;
}

const Avatar: React.FC<IAvatar> = props => {
  return (
    <AvatarBase.Image
      style={[{ alignSelf: 'center' }, props.style]}
      size={90}
      source={{ uri: PLACEHOLDER_URL }}
    />
  );
};

export default Avatar;
