import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
const theme: Theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    text: '#0000',
    accent: '#FF6D30',
    primary: '#2D2D2D',
  },
  // dark: false,
  mode: 'exact',
  dark: false,
};
import Routes from './Routes';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
}
