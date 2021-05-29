import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTE_MAP, ROUTE_NAMES } from './routes';

import { RouteConfig } from './types';
import { getScreenConfig } from './helpers';
import Title from 'native/typography/Title';

const Stack = createStackNavigator();

const linking: LinkingOptions = {
  prefixes: ['http://kitchenflow.com', 'kitchenflow://'],
  config: {
    screens: {
      ...getScreenConfig(ROUTE_MAP),
    },
  },
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={() => <Title>No Page</Title>}
    >
      <Stack.Navigator initialRouteName={ROUTE_NAMES.Onboarding_Welcome}>
        {Object.entries<RouteConfig>(ROUTE_MAP).map(([name, roouteConfig]) => (
          <Stack.Screen
            key={name}
            options={{
              headerShown: false,
            }}
            name={name}
            component={roouteConfig.screen}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;