import React from 'react';
import { IconButton } from 'react-native-paper';

import { View, ViewStyle } from 'react-native';
import Title from 'native/typography/Title';
import { useNavigation } from '@react-navigation/core';

interface IHeader {
  style?: ViewStyle;
  title?: string;
}

const Header: React.FC<IHeader> = props => {
  const { goBack } = useNavigation();

  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        },
        props.style,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1 }}>
          <IconButton
            icon="chevron-left"
            size={48}
            style={{
              padding: 0,
              margin: 2,
              marginLeft: 0,
              // justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
            onPress={() => goBack()}
          />
        </View>
        <View style={{ flex: 4, justifyContent: 'center' }}>
          <Title align="center" size={21} weight={'400'}>
            {props.title}
          </Title>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>

      {props.children}
    </View>
  );
};

Header.defaultProps = {
  title: '',
};

export default Header;
