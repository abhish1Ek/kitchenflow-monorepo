import React from 'react';
import { Subheading } from 'react-native-paper';
import createTypography from '../utility';

const Subtitle = createTypography(
  Subheading,
  {
    size: 15,
    weight: '600',
  },
  { color: '#7C7C7C' },
);

export default Subtitle;
