import React from 'react';
import { StyleSheet, View } from 'react-native';
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
      <View style={styles.container}>{props.children}</View>
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
