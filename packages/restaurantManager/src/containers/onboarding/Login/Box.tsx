import React from 'react';
import { View, FlexStyle, StyleProp, ViewStyle } from 'react-native';

interface IBox {
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  flex?: FlexStyle['flex'];
  style?: StyleProp<ViewStyle>;
}
const Box: React.FC<IBox> = props => {
  return (
    <View
      style={[
        {
          flex: props.flex,
          justifyContent: props.justify,
          alignItems: props.align,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};

Box.defaultProps = {
  justify: 'center',
  flex: 1,
};

export default Box;
