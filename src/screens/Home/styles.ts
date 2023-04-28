import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

/* importar o styled com /native, fazer a tipagem do styled-component 
e instalar a extensão vscode-styled-components */

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors.Background}
`;

export const Text = styled.Text`
    font-size: 48px;
`;
