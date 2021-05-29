import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { IFieldProps } from '../types';
import { injectFieldHandlerHoc } from '../utility/injectFieldHandlerHoc';

interface IOtpProps extends IFieldProps {
  cellCount?: number;
}

const OtpInput: React.FC<IOtpProps> = props => {
  const { value, onChangeValue, cellCount = 6 } = props;

  const ref = useBlurOnFulfill({ value, cellCount: cellCount });
  const [otpProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeValue,
  });

  return (
    <CodeField
      ref={ref}
      {...otpProps}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={onChangeValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginRight: 2,
  },
  focusCell: {
    borderColor: '#000',
  },
});

const OtpInputField = injectFieldHandlerHoc(OtpInput);

export default OtpInputField;
