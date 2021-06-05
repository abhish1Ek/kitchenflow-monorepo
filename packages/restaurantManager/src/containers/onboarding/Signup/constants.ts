import { RadioObject } from 'native/components/RadioInput';
import * as _ from 'lodash';

export type Gender = 'm' | 'f';

export type TeamRoleType = 'FRONT_OF_HOUSE' | 'BACK_OF_HOUSE';

export const backOfHouseType = [
  'management',
  'maintainance',
  'cleaners',
  'cook',
  'Delivery',
] as const;

export type BackOfHouseType = typeof backOfHouseType[number];

type RadioItem<T> = RadioObject & {
  value: T;
};

type GendeObject = RadioItem<Gender>;

type TeamRoleObject = RadioItem<TeamRoleType>;

type BackOfHouseObject = RadioItem<BackOfHouseType>;

export const genderData: GendeObject[] = [
  { label: 'Male', value: 'm' },
  { label: 'Female', value: 'f' },
];

export const teamRoleData: TeamRoleObject[] = [
  { label: 'Front of house', value: 'FRONT_OF_HOUSE' },
  { label: 'Back of house', value: 'BACK_OF_HOUSE' },
];

export const backOfHouseData: BackOfHouseObject[] = backOfHouseType.map(
  str => ({
    label: _.startCase(str),
    value: str,
  }),
);
