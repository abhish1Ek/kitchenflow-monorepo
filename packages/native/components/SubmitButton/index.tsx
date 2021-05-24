import React from 'react';
import { Button as BaseButton } from 'react-native-paper';

type IButtonProps = React.ComponentProps<typeof BaseButton>;

export type TSubmitButtonProps = IButtonProps & {};

const SubmitButton: React.FC<TSubmitButtonProps> = props => {
  const { style, ...restProps } = props;
  return (
    <BaseButton
      style={[{ borderRadius: 50 }, style]}
      onPress={props.onPress}
      mode="contained"
      dark={true}
      color="#2D2D2D"
      contentStyle={{ padding: 10 }}
      {...restProps}
    >
      {props.children}
    </BaseButton>
  );
};

export default SubmitButton;
