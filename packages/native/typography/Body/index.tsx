import React from 'react';
import { Paragraph } from 'react-native-paper';
import createTypography from '../utility';

const Body = createTypography(
  Paragraph,
  {
    size: 12,
    weight: '400',
  },
  { color: '#2D2D2D' },
);

export default Body;
