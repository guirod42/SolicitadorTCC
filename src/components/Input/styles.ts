import styled, { css } from "styled-components/native";

export interface StyledTextInputProps {
  borderAlert?: boolean;
  lockIcon?: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const StyledTextInput = styled.TextInput<StyledTextInputProps>`
  background-color: ${({ theme }) => theme.colors.Background};
  border-radius: 8px;
  flex: 1;
  font-size: 18px;
  height: 50px;  
  padding-left: 50px;

  border-color: ${({ borderAlert, theme }) => (
    borderAlert ? theme.colors.Alert
      : theme.colors.Text_Prymary)};
  border-width: ${({ borderAlert }) => (
    borderAlert ? '2px'
      : '1px')};
  padding-right: ${({ lockIcon }) => (
    lockIcon ? '50px'
      : '10px')};
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