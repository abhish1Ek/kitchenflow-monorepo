import React from 'react';
import { View } from 'react-native';
import { Button, List, useTheme } from 'react-native-paper';
import { ROUTE_NAMES } from '../../../Routes/routes';
import ProfileScreen from '../components/ProfileScreen';
import Body from 'native/typography/Body';
import Title from 'native/typography/Title';
import Avatar from '../components/Avatar';
import Header from 'native/components/Header';
import { useNavigation } from '@react-navigation/core';

interface Item {
  title: string;
  path?: keyof typeof ROUTE_NAMES;
}

const create = (obj: Item) => ({
  ...obj,
  rightIcon: 'chevron-right',
  leftIcon: 'lock-outline',
});

const items = [
  create({
    title: 'Change Password',
    path: 'Profile_ChangePassword',
  }),
  create({ title: 'Contact Team Kitchenflow', path: 'Profile_Contact' }),
  create({ title: 'Order History' }),
  create({ title: 'Privacy Policy' }),
];

const ManageProfile: React.FC = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <ProfileScreen>
      <Header title="Manage Profile" style={{ paddingBottom: 20 }}>
        <Avatar />
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
          onPress={() => navigation.navigate(ROUTE_NAMES.Profile_Edit)}
        >
          Edit Profile
        </Button>
      </Header>
      <View style={{ marginTop: 20 }}>
        {items.map(item => (
          <List.Item
            style={{ backgroundColor: '#fff' }}
            key={item.title}
            title={item.title}
            left={p => <List.Icon {...p} icon={item.leftIcon} />}
            right={p => <List.Icon {...p} icon={item.rightIcon} />}
            onPress={() => {
              if (item.path) {
                navigation.navigate(item.path);
              }
            }}
          />
        ))}
      </View>
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
