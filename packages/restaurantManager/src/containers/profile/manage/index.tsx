import { PLACEHOLDER_URL } from 'native/constants';
import React from 'react';
import { View } from 'react-native';
import { Button, List, Avatar, IconButton, useTheme } from 'react-native-paper';
import ProfileScreen from '../components/ProfileScreen';
import Body from 'native/typography/Body';
import Title from 'native/typography/Title';

const create = (obj = { title: '' }) => ({
  ...obj,
  rightIcon: 'chevron-right',
  leftIcon: 'lock-outline',
});

const items = [
  create({ title: 'Change Password' }),
  create({ title: 'Contact Team Kitchenflow' }),
  create({ title: 'Order History' }),
  create({ title: 'Privacy Policy' }),
];

const ManageProfile: React.FC = () => {
  const { colors } = useTheme();

  return (
    <ProfileScreen>
      <View
        style={{
          backgroundColor: '#fff',
          marginBottom: 20,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
          }}
        >
          <IconButton
            icon="chevron-left"
            size={48}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <Avatar.Image
          style={{ alignSelf: 'center' }}
          size={90}
          source={{ uri: PLACEHOLDER_URL }}
        />
        <Title size={21} align="center">
          John Mayer
        </Title>

        <Body size={13} align="center">
          Manager
        </Body>
        <Button
          mode="contained"
          labelStyle={{ color: '#fff' }}
          style={{ alignSelf: 'center', borderRadius: 20, marginTop: 20 }}
          color={colors.accent}
          uppercase={false}
          onPress={() => {}}
        >
          Edit Profile
        </Button>
      </View>

      {items.map(item => (
        <List.Item
          style={{ backgroundColor: '#fff' }}
          key={item.title}
          title={item.title}
          left={p => <List.Icon {...p} icon={item.leftIcon} />}
          right={p => <List.Icon {...p} icon={item.rightIcon} />}
        />
      ))}
      <View style={{ flexGrow: 1 }} />

      <Button
        contentStyle={{ padding: 10 }}
        style={{ borderRadius: 0 }}
        mode="contained"
        onPress={() => {}}
      >
        Logout
      </Button>
    </ProfileScreen>
  );
};

export default ManageProfile;
