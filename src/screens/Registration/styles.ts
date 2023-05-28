import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: ${({ theme }) => theme.colors.Background};    
    justify-content: center;
    padding-top: 30px;
`;

export const Logo = styled.Image`
    height: 200px;
    width: 200px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.Principal_001};
    font-size: 28px;
    font-weight: 700;
    margin-top: 7px;
    padding: 0 24px 16px;
    text-align: center;
`;

export const SingUp = styled.TouchableOpacity`
    color: ${({ theme }) => theme.colors.Info};
    margin-top: 7px;
    font-size: 18px;
    text-align: center;
    font-weight: 700;
`;

