export interface RouteConfig {
  screen: React.ComponentType<any>;
  path: string;
}

export type RouteMap = Record<string, RouteConfig>;
