import styled , { css } from "styled-components/native";

export type ProfessorProps = {
    type: 'primary' | 'secondary';
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
}) <ProfessorProps>`
    width: 200px;
    padding: 22px;
    border-radius: 7px;
    background-color: ${({ theme , type }) => type === 'primary' ? 'red' : 'green'};
    /* condicional que muda a cor do background de acordo com o valor de type */

    align-items: center;
    justify-content: center;

    ${({ type, theme }) => type === 'primary' && css`
        border: 5px;
        border-color: ${theme.colors.Text_Prymary}
    `};
    /* condicional que muda mais de uma propriedade de css de acordo com o valor de type */
`;

export const Photo = styled.Image`
    height: 90px;
    width: 90px;
    border-radius: 45px;
`;

export const Name = styled.Text`
    margin-top: 7px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.Text_Prymary}
`;

export const Specialist = styled.Text`
    margin-top: 3px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.Text_Prymary}
`;
