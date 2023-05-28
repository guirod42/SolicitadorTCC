import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.Background};    
    align-items: center;
    justify-content: flex-start;
    padding-top: 30px;
`;

export const Title = styled.Text`
    margin-top: 7px;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.Principal_001};
    text-align: center;
    font-weight: 700;
    padding: 0 24px 16px;
`;

export const SubTitle = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.Principal_001};
    text-align: center;
    font-weight: 700;
`;