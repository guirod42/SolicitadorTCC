import styled, { css } from "styled-components/native";
import { FlatList, FlatListProps } from 'react-native';
import { ProfessorDataProps } from '../../components/Professor/styles'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.Background};    
    align-items: center;
    justify-content: flex-start;
    padding-top: 30px;
`;

export const List = styled(FlatList as new (props: FlatListProps<ProfessorDataProps>) => FlatList<ProfessorDataProps>)`
    margin-left: 15px;
`;

export const Title = styled.Text`
    margin-top: 35px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.Principal_001};
    text-align: center;
    font-weight: 700;
    padding-bottom: 16px;
`;

export const SubTitle = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.Principal_001};
    text-align: center;
    font-weight: 700;
`;