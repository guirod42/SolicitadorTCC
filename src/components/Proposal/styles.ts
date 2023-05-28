import styled, { css } from "styled-components/native";
  
export const Container = styled.View`
    align-items: center;
    border-color: ${({ theme }) => theme.colors.Primary_100};
    border-radius: 8px;
    border-width: 1px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px;
    width: 90%;
`;

