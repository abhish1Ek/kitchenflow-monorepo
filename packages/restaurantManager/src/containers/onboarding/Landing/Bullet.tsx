import React from 'react';
import { View, Text } from 'react-native';

const Bullet: React.FC = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 3,
      }}
    >
      <View
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#C4C4C4',
          borderRadius: 6,
          marginRight: 5,
        }}
      />
      <Text style={{ color: '#7C7C7C', fontSize: 11 }}>{props.children}</Text>
    </View>
  );
};

export default Bullet;
