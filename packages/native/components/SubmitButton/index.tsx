import React from 'react';
import { Button as BaseButton } from 'react-native-paper';

interface ISubmitButton {
  onPress: () => void;
}

const SubmitButton: React.FC<ISubmitButton> = props => {
  return (
    <BaseButton
      style={{ borderRadius: 50 }}
      onPress={props.onPress}
      mode="contained"
      dark={true}
      color="#2D2D2D"
      contentStyle={{ padding: 10 }}
    >
      {props.children}
    </BaseButton>
  );
};

export default SubmitButton;
