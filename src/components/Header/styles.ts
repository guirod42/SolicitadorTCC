import styled , { css } from "styled-components/native";

export const Container = styled.View`
    color: ${({theme}) => theme.colors.Text_Primary};
    width: 100%;
    height: 56px;
    border: 1px solid;
    padding: 10;
`;

export const Image = styled.Image`    
    width: 75;
    height: 75;
`;
