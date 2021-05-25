import { Text, TextStyle } from 'react-native';
import React from 'react';
import { ITypography } from './types';

type TextProps = React.ComponentProps<typeof Text> & {
  children: React.ReactNode;
};

type TypographyElement = (props: TextProps) => JSX.Element;

const createTypography = (
  Element: TypographyElement,
  defaultProps: Partial<ITypography>,
  overrideStyle?: TextStyle,
) => {
  const TypographyElement: React.FC<ITypography> = props => {
    const { size, weight, align, style, children } = props;
    return (
      <Element
        style={[
          {
            fontSize: size,
            fontWeight: weight,
            textAlign: align,
            color: '#2D2D2D',
          },
          overrideStyle,
          style,
        ]}
      >
        {children}
      </Element>
    );
  };

  TypographyElement.defaultProps = defaultProps;
  return TypographyElement;
};

export default createTypography;
