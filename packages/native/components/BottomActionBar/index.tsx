import React from 'react';
import { View } from 'react-native';
import { KeyboardAvoidingView, ViewStyle } from 'react-native';

interface IBottomActionBar {
  style?: ViewStyle;
  // noEmpty?: boolean;
}

const BottomActionBar: React.FC<IBottomActionBar> = props => {
  return (
    <View>
      {/* {!props.noEmpty && <View style={styles.emptyView} />} */}
      <KeyboardAvoidingView
        behavior="padding"
        style={[
          {
            marginBottom: 10,
            paddingHorizontal: 15,
            justifyContent: 'flex-end',
          },
          props.style,
        ]}
      >
        {props.children}
      </KeyboardAvoidingView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   emptyView: { flexGrow: 1 },
// });

// BottomActionBar.defaultProps = {
//   noEmpty: false,
// };

export default BottomActionBar;
