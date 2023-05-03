import { FlatList, FlatListProps, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.Background};
`;

export const Logo = styled.Image`
    height: 200px;
    width: 200px;
    margin-top: 30px
`;

export const Title = styled.Text`
    margin-top: 7px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.Principal_001};
    text-align: center;
    font-weight: 700;
    padding: 0 24px 16px;
`;

export const Touch = styled.TouchableOpacity`
`;

export const SingUp = styled.Text`
    color: ${({ theme }) => theme.colors.Info};
    margin-top: 7px;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 30px;
`;