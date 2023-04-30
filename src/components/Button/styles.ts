import styled, { css } from "styled-components/native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { TextStyle, ViewStyle } from 'react-native';

export const ButtonStyle: ViewStyle = {        
    borderRadius: 8,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16
  };

  export const TextButton = styled.Text`
    color: ${({theme}) => theme.colors.Text_Secondary};
    font-size: 18px;
    font-weight: 700;
  `;