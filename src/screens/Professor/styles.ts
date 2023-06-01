import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { proposalInterface } from '../../interface/proposalInterface'

export const Container = styled.SafeAreaView`
    align-items: center;
    background: ${({ theme }) => theme.colors.Background};    
    flex: 1;
    justify-content: flex-start;
    padding-top: 30px;
`;

export const Title1 = styled.Text`
        color: ${({ theme }) => theme.colors.Principal_001};
        font-size: 28px;
        font-weight: 700;
        margin-top: 7px;
        padding: 15px 0px 0px;
        text-align: center;
`;

export const Title2 = styled.Text`
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
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const List = styled(FlatList as new
    (props: FlatListProps<proposalInterface>) => FlatList<proposalInterface>)`
    margin-left: 15px;
`;