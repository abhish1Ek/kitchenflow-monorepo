import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Page from './containers/Page';

export default function Main() {
  return (
    <PaperProvider>
      <Page />
    </PaperProvider>
  );
}
