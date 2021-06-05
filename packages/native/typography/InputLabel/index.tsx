import React from 'react';
import { useTheme } from 'react-native-paper';
import Subtitle from '../Subtitle';

interface IInputLabel {
  error?: boolean;
}

const InputLabel: React.FC<IInputLabel> = props => {
  const { colors } = useTheme();

  return (
    <Subtitle
      size={14}
      weight="200"
      style={{
        paddingRight: 12,
        ...(props.error ? { color: colors.error } : null),
      }}
    >
      {props.children}
    </Subtitle>
  );
};

export default InputLabel;
