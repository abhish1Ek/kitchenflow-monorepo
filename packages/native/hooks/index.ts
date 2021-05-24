import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
  const [visible, setVisible] = useState(false);

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardDidShow() {
      setVisible(true);
    }

    function onKeyboardDidHide() {
      setVisible(false);
    }

    const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return [visible, dismiss];
};

export default useKeyboard;
