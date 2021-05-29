import { PathConfigMap } from '@react-navigation/native';

import { RouteConfig, RouteMap } from './types';

export const getScreenConfig = (routeMap: RouteMap) => {
  return Object.entries<RouteConfig>(routeMap).reduce(
    (acc, [name, routeConfig]) => {
      acc[name] = routeConfig.path;
      return acc;
    },
    {} as PathConfigMap,
  );
};
