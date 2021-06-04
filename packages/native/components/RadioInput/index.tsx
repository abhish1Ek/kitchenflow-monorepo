import React from 'react';
import Body from 'native/typography/Body';
import { View } from 'react-native';
import { RadioButton, useTheme } from 'react-native-paper';
import * as _ from 'lodash';
import Subtitle from 'native/typography/Subtitle';

type RadioObject = {
  label: string;
  value: string;
};

interface IRadioInput {
  data: RadioObject[];
  onChange: (val: any) => void;
  label: string;
  value: any;
}

const RadioInput: React.FC<IRadioInput> = props => {
  const { data, onChange, label, value } = props;
  console.log(useTheme());
  const onCheckboxPress = (val: any) => () => {
    onChange(val);
  };

  return (
    <View>
      <Subtitle>{label}</Subtitle>
      <RadioButton.Group onValueChange={value => onChange(value)} value={value}>
        {_.chunk(data, 2).map(arr => (
          <View style={{ flexDirection: 'row', flex: 2 }}>
            {arr.map(radioObject => (
              <View style={{ flex: 1 }}>
                <RadioButton.Item
                  label={radioObject.label}
                  value={radioObject.value}
                  style={{ flexDirection: 'row-reverse' }}
                  labelStyle={{ color: '#B8B8B8' }}
                />
              </View>
            ))}
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default RadioInput;
