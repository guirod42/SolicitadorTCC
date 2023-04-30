import styled , { css } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 56px;
    border: 1px solid;
    color: ${({theme}) => theme.colors.Text_Prymary};
    padding: 10;
`;

export const Image = styled.Image`    
    width: 75;
    height: 75;
`;
