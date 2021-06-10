import Welcome from '../containers/onboarding/Welcome';
import Landing from '../containers/onboarding/Landing';
import Login from '../containers/onboarding/Login';
import CreatePassword from '../containers/onboarding/CreatePassword';
import { RouteConfig } from './types';
import VerificationSuccess from '../containers/onboarding/VerificationSuccess';
import Signup from '../containers/onboarding/Signup';
import ManageProfile from '../containers/profile/Manage';
import EditProfile from '../containers/profile/Edit';
import ChangePassword from '../containers/profile/ChangePassword';
import ContactKitchenFlow from '../containers/profile/Contact';

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
  Onboarding_Signup: c({
    screen: Signup,
    path: 'onboarding/signup',
  }),
  Profile_Manage: c({
    screen: ManageProfile,
    path: 'profile/manage',
  }),
  Profile_Edit: c({
    screen: EditProfile,
    path: 'profile/edit',
  }),
  Profile_ChangePassword: c({
    screen: ChangePassword,
    path: 'profile/change-password',
  }),
  Profile_Contact: c({
    screen: ContactKitchenFlow,
    path: 'profile/contact',
  }),
});

const getRouteName = <A extends object>(obj: A) =>
  (Object.keys(obj) as (keyof A)[]).reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
  }, {} as any) as { [P in keyof A]: P };

const ROUTE_NAMES = getRouteName(ROUTE_MAP);

export { ROUTE_MAP, ROUTE_NAMES };
