import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    align-items: center;
    background: ${({ theme }) => theme.colors.Background};    
    flex: 1;
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

export const Touch = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-bottom: 30px;
    width: 70%;
`;

export const SingUp = styled.Text`
    color: ${({ theme }) => theme.colors.Info};
    font-size: 18px;
    font-weight: 700;
`;