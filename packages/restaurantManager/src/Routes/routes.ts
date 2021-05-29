import Welcome from '../containers/onboarding/Welcome';
import Landing from '../containers/onboarding/Landing';
import Login from '../containers/onboarding/Login';
import CreatePassword from '../containers/onboarding/CreatePassword';
import { RouteConfig } from './types';
import VerificationSuccess from '../containers/onboarding/VerificationSuccess';

const c = (obj: RouteConfig) => obj;

const ROUTE_MAP = Object.freeze({
  Onboarding_Welcome: c({
    screen: Welcome,
    path: 'onboarding/welcome',
  }),
  Onboarding_Landing: c({
    screen: Landing,
    path: 'onboarding/landing',
  }),
  Onboarding_Login: c({
    screen: Login,
    path: 'onboarding/login',
  }),
  Onboarding_CreatePassword: c({
    screen: CreatePassword,
    path: 'onboarding/createPassword',
  }),
  Onboarding_EmailVaerified: c({
    screen: VerificationSuccess,
    path: 'onboarding/emailVerified',
  }),
});

const getRouteName = <A extends object>(obj: A) =>
  (Object.keys(obj) as (keyof A)[]).reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {} as any) as { [P in keyof A]: P };

const ROUTE_NAMES = getRouteName(ROUTE_MAP);

export { ROUTE_MAP, ROUTE_NAMES };
