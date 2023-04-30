import { FlatList , FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    /*justify-content: center;*/
    background: ${({ theme }) => theme.colors.Background};
`;

export const Logo = styled.Image`
    height: 200px;
    width: 200px;
`;

export const Title = styled.Text`
    margin-top: 7px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.Info};
    text-align: center;
    font-weight: 700;
    padding: 0 24px 16px;
`;

export const User = styled.TextInput`
    
`;