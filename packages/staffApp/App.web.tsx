import Main from './src/Main';

// Generate required css
// @ts-ignore
import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialCommunityIcons;
}`;

// @ts-ignore
const doc: any = document;

// Create stylesheet
const style = doc.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(doc.createTextNode(iconFontStyles));
}

// Inject stylesheet
doc.head.appendChild(style);

export default Main;
