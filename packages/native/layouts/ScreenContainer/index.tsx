import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

const isWeb = Platform.OS === 'web';

const ScreenContainer: React.FC = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!isWeb) {
          Keyboard?.dismiss?.();
        }
      }}
      accessible={isWeb}
    >
      <View style={styles.container}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC', padding: 15 },
});

export default ScreenContainer;
