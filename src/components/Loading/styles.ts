import styled, { css } from "styled-components/native";
import { 
  TextInputProps, 
  ViewProps, 
} from "react-native";

export const Container = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: '#6A3B';
`;

export const Ball = styled.View`
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background-color: '#000'
`;

export const Indicator = styled.ActivityIndicator`
	size: large;
	color: #666
`;
