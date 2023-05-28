import React, { forwardRef, Ref } from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

import { ButtonStyle, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color: string;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button = forwardRef((props: ButtonProps, ref: Ref<TouchableOpacity>) => {
  const { color, title, buttonStyle, ...rest } = props;
  return (
    <TouchableOpacity
      style={[ButtonStyle, { backgroundColor: color }, buttonStyle]}
      activeOpacity={0.7}
      {...rest}
    >
      <TextButton>{title}</TextButton>
    </TouchableOpacity>
  );
});

export default Button;
