import { TextInputProps, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export interface StyledTextInputProps extends TextInputProps, TextInput {
  borderAlert?: boolean;
  lockIcon?: boolean;
  focusOnError() : void;
  resetError() : void;
}

export const Container = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  height: 50px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Background};
  padding-left: 50px;

  padding-right: ${({ lockIcon }) => (
    lockIcon ? '50px'
    : '12px' )};
  border-radius: 8px;
  font-size: 18px;
  
  border-color: ${({ borderAlert, theme }) => (
    borderAlert ? theme.colors.Alert
      : theme.colors.Text_Prymary)};
  
  border-width: ${({ borderAlert }) => (
    borderAlert ? '2px'
      : '1px' )};
`;

export const Icon = styled.View`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const IconPass = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 10px;
`;