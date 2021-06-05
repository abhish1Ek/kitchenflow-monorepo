import Subtitle from 'native/typography/Subtitle';
import Title from 'native/typography/Title';
import React, { useMemo, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import BottomHalfModal from '../Modals/BottomHalfModal';
import RadioInput, { IRadioInput } from '../RadioInput';

export interface ISelect extends Omit<IRadioInput, 'label'> {
  label: string;
  description?: string;
}

const Select: React.FC<ISelect> = props => {
  const [isOpen, toggleOpen] = useState(false);

  const { label, onChange, data, value, columns, description } = props;

  console.log(props);

  const inputValue = useMemo(() => {
    return data.find(obj => obj.value === value)?.label ?? '';
  }, [data, value]);

  return (
    <View>
      <TouchableOpacity onPress={() => toggleOpen(true)}>
        <View pointerEvents="none">
          <TextInput
            style={styles.input}
            disabled
            label={label}
            value={inputValue}
          />
        </View>
      </TouchableOpacity>
      <BottomHalfModal onClose={() => toggleOpen(false)} open={isOpen}>
        <Title align="center">{label}</Title>
        {description && <Subtitle align="center">{description}</Subtitle>}
        <View style={{ marginTop: 20 }}>
          <RadioInput
            columns={columns}
            onChange={val => {
              console.log(val);
              onChange(val);
              toggleOpen(false);
            }}
            data={data}
            value={value}
          />
        </View>
      </BottomHalfModal>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FCFCFC',
    // padding: 0,
    paddingBottom: 0,
    // paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
  },
});

export default Select;
