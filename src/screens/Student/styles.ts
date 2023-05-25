import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.Background};    
    align-items: center;
    justify-content: flex-start;
`;