import { TextStyle } from 'react-native';

export interface ITypography {
  size?: TextStyle['fontSize'];
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];
  style?: TextStyle;
}
