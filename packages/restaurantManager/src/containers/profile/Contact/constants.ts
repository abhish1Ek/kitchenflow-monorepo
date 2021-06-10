import { RadioItem } from 'native/components/RadioInput';
export type IssueType =
  | 'SENSOR_ISSUE'
  | 'PAYMENT_PROBLEM'
  | 'ORDER_ISSUE'
  | 'OTHER';

export type IssueObject = RadioItem<IssueType>;

export const issueData: IssueObject[] = [
  { label: 'Sesnor issue', value: 'SENSOR_ISSUE' },
  { label: 'Payment Problem', value: 'PAYMENT_PROBLEM' },
  { label: 'Order issue', value: 'ORDER_ISSUE' },
  { label: 'Other', value: 'OTHER' },
];
