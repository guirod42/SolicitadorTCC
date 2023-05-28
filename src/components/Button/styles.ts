import styled from "styled-components/native";
import { ViewStyle } from 'react-native';

export const ButtonStyle: ViewStyle = {
  alignItems: 'center',
  borderRadius: 8,
  height: 50,
  justifyContent: 'center',
  marginVertical: 10,
  width: '70%',
};

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.Text_Secondary};
    font-size: 18px;
    font-weight: 700;
  `;