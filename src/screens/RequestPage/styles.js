import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${({ theme }) => theme.colors.Background};    
    align-items: center;
    justify-content: center;
`;

