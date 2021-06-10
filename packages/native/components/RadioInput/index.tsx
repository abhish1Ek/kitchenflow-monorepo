import React from 'react';
import Body from 'native/typography/Body';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as _ from 'lodash';
import InputLabel from 'native/typography/InputLabel';
import FieldRow from '../FieldRow';

export type RadioObject = {
  label: string;
  value: string;
};

export type RadioItem<T> = RadioObject & {
  value: T;
};

export interface IRadioInput {
  data: RadioObject[];
  onChange: (val: any) => void;
  label?: string;
  value: any;
  columns?: number;
}

const RadioInput: React.FC<IRadioInput> = props => {
  const { data, onChange, label, value, columns } = props;

  return (
    <View>
      {label && <InputLabel> {label}</InputLabel>}

      <RadioButton.Group onValueChange={value => onChange(value)} value={value}>
        <FieldRow columns={columns}>
          {data.map(radioObject => (
            <View key={radioObject.label}>
              <RadioButton.Item
                label={radioObject.label}
                value={radioObject.value}
                style={{ flexDirection: 'row-reverse', paddingHorizontal: 0 }}
                labelStyle={{ color: '#B8B8B8' }}
                mode="android"
              />
            </View>
          ))}
        </FieldRow>
      </RadioButton.Group>
    </View>
  );
};

RadioInput.defaultProps = {
  columns: 2,
};

export default RadioInput;
