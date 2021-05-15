import React from 'react';

import { useTheme, TextInput } from 'react-native-paper';

const InputText: React.FC<React.ComponentProps<typeof TextInput>> = props => {
  const theme = useTheme();
  return <TextInput {...props} style={{ backgroundColor: '#FCFCFC' }} />;
};

export default InputText;
