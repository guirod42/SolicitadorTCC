import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    align-items: center;
    background: ${({ theme }) => theme.colors.Background};    
    flex: 1;
    justify-content: flex-start;
    padding-top: 30px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.Principal_001};
    font-size: 28px;
    font-weight: 700;
    padding: 0 24px 16px;
    margin-top: 7px;
    text-align: center;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.Principal_001};
    margin-top: 10px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
`;