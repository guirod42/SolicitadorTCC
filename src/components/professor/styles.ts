import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export interface ProfessorDataProps extends TouchableOpacityProps {
    id: string;
    nome: string;
    email: string;
    imagem: string;
    onPress(): void;
};

export const Container = styled.View`
    align-items: center;
    border-color: ${({ theme }) => theme.colors.Primary_100};
    border-radius: 8px;
    border-width: 1px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px;
    width: 90%;
`;

export const PhotoSpace = styled.View`
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 20%;
`;

export const Data = styled.View`
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
`;

export const SelectSpace = styled.TouchableOpacity`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.Success};
    border-radius: 15px;
    height: 30px;
    justify-content: center;
    margin: 15px;
    width: 30px;
`;

export const Photo = styled.Image`
    border-radius: 35px;
    height: 70px;
    width: 70px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: left;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    font-style: italic;
    margin-left: 15px;
`;

export const Select = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;