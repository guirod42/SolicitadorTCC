import styled, { css } from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { ViewProps, TextInputProps } from 'react-native';

interface InputContainerProps extends ViewProps {}

interface InputProps extends TextInputProps {
  icon?: keyof typeof AntDesign.glyphMap;
}

export const Container = styled.View<InputContainerProps>`
  flex-direction: row;
  margin-top: 20px;
`;

export const StyledTextInput = styled.TextInput`
  border-color: ${({ theme }) => theme.colors.Text_Prymary};
  border-radius: 8px;
  border-width: 1px;
  font-size: 18px;
  height: 40px;
  margin-bottom: 8px;
  width: 80%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const IconLeft = styled(AntDesign)`
  position: absolute;
  left: 6px;
  top: 6px;
`;

export const IconRight = styled.TouchableOpacity`
  position: absolute;
  right: 6px;
  top: 6px;
`;

export const styles = StyleSheet.create({
  // ...
});
