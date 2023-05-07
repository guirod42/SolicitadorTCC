import styled, { css } from "styled-components/native";
import { 
  TextInputProps, 
  TextInput, 
  TextInputState,  } from "react-native";

export interface StyledTextInputProps extends TextInput , TextInputProps {
  borderAlert?: boolean;
  lockIcon?: boolean;  
  focusOnError() : void;
  resetError() : void;
  heightChange?: boolean;
  inputHigh?: number;
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
  background-color: ${({ theme }) => theme.colors.Background};
  padding-left: 50px;
  border-radius: 8px;
  font-size: 18px;
  
  height: ${({ heightChange, inputHigh }) => (
    heightChange && inputHigh ? inputHigh + 28 + 'px' : '50px')};

  padding-right: ${({ lockIcon }) => (
    lockIcon ? '55px'
    : '12px' )};
  
  border-color: ${({ borderAlert, theme }) => (
    borderAlert ? theme.colors.Alert
      : theme.colors.Text_Primary)};
  
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
  right: 15px;
  top: 10px;
`;