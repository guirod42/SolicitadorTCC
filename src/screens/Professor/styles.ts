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
`;