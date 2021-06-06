import React from 'react';
import { KeyboardAvoidingView, ViewStyle } from 'react-native';

interface IBottomActionBar {
  style?: ViewStyle;
}

const BottomActionBar: React.FC<IBottomActionBar> = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[
        { marginBottom: 10, paddingHorizontal: 15, justifyContent: 'flex-end' },
        props.style,
      ]}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

export default BottomActionBar;
