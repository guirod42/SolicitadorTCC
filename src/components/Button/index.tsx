import React, { forwardRef, Ref } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleProp, ViewStyle } from 'react-native';

import { ButtonStyle, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button = forwardRef((props: ButtonProps, ref: Ref<TouchableOpacity>) => {
  const { title, color, buttonStyle, ...rest } = props;
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
