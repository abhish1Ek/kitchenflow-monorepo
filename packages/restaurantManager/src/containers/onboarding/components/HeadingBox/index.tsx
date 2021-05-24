import React from 'react';
import { Subheading, Title, Paragraph } from 'react-native-paper';
import Box from '../Box';

export interface IHeadingBox {
  title: string;
  description: string;
  subTitle: string;
}

const HeadingBox: React.FC<IHeadingBox> = props => {
  return (
    <Box flex={3} style={{ width: '80%' }}>
      <Title style={{ fontSize: 24 }}>{props.title}</Title>
      <Subheading>{props.subTitle}</Subheading>
      <Paragraph>{props.description}</Paragraph>
    </Box>
  );
};

export default HeadingBox;
