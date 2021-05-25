import React from 'react';
import Title from 'native/typography/Title';
import Subtitle from 'native/typography/Subtitle';
import Box from '../Box';
import Body from 'native/typography/Body';

export interface IHeadingBox {
  title: string;
  description: string;
  subTitle: string;
}

const HeadingBox: React.FC<IHeadingBox> = props => {
  return (
    <Box flex={3} style={{ width: '80%' }}>
      <Title>{props.title}</Title>
      <Subtitle>{props.subTitle}</Subtitle>
      <Body>{props.description}</Body>
    </Box>
  );
};

export default HeadingBox;
