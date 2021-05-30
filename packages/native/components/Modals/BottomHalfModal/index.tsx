import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';

interface IBottomHalfModal {
  open: boolean;
  onClose: () => void;
}

const BottomHalfModal: React.FC<IBottomHalfModal> = props => {
  const { open, onClose } = props;
  return (
    <Modal
      testID={'modal'}
      isVisible={open}
      onSwipeComplete={onClose}
      swipeDirection={['down']}
      style={styles.view}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
    >
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.container}>{props.children}</View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 15,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default BottomHalfModal;
