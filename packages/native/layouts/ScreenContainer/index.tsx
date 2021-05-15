import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenContainer: React.FC = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC', padding: 15 },
});

export default ScreenContainer;
