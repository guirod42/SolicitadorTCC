import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { taskInterface } from './../../interface/taskInterface'

export const Container = styled.SafeAreaView`
    background: ${({ theme }) => theme.colors.Background};    
    align-items: center;
    flex: 1;
    justify-content: flex-start;
    padding-top: 30px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.Principal_001};
    font-size: 28px;
    font-weight: 700;
    margin-top: 7px;
    padding: 0 24px 16px;
    text-align: center;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.Principal_001};
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
    text-align: center;
`;

export const List = styled(FlatList as new
    (props: FlatListProps<taskInterface>) => FlatList<taskInterface>)`
    
`;