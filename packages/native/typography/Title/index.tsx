import React from 'react';
import { Title as TitleBase } from 'react-native-paper';
import createTypography from '../utility';

const Title = createTypography(
  TitleBase,
  {
    size: 24,
    weight: '600',
  },
  { color: '#2D2D2D' },
);

export default Title;
