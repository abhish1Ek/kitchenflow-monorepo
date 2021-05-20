import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Page from './containers/Page';

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    text: '#0000',
    accent: '##2D2D2D',
  },
  dark: false,
};

export default function Main() {
  return (
    // <PaperProvider>
    <Page />
    // </PaperProvider>
  );
}
