import styled from "styled-components/native";
import {
  TextInputProps,
  TextInput,
} from "react-native";

export interface StyledTextInputProps extends TextInput, TextInputProps {
  borderAlert?: boolean;
  inputHigh?: number;
  heightChange?: boolean;
  lockIcon?: boolean;
  focusOnError(): void;
  resetError(): void;
}

export const Container = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  flex: 1;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 50px;
  background-color: ${({ theme }) => theme.colors.Background};
  border-color: ${({ borderAlert, theme }) => (borderAlert ? theme.colors.Alert : theme.colors.Text_Primary)};
  border-width: ${({ borderAlert }) => (borderAlert ? '2px' : '1px')};
  padding-right: ${({ lockIcon }) => (lockIcon ? '55px' : '12px')};
  height: ${({ heightChange, inputHigh }) => (heightChange && inputHigh ? inputHigh + 26 + 'px' : '50px')};
`;

export const Icon = styled.View`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const IconPass = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 10px;
`;