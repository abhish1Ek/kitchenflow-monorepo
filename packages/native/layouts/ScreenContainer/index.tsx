import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ViewStyle,
} from 'react-native';

const isWeb = Platform.OS === 'web';

interface IScreenContainer {
  style?: ViewStyle;
}

const ScreenContainer: React.FC<IScreenContainer> = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!isWeb) {
          Keyboard?.dismiss?.();
        }
      }}
      accessible={isWeb}
    >
      <View style={[styles.container, props.style]}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
});

export default ScreenContainer;
