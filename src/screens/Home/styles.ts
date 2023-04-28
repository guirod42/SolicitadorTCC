import { FlatList , FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { ProfessorDataProps } from '../../components/professor'

/* importar o styled com /native, fazer a tipagem do styled-component 
e instalar a extensão vscode-styled-components */

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.Background};
`;

export const List = styled(FlatList as new (props: FlatListProps<ProfessorDataProps>) => FlatList<ProfessorDataProps>) `

`;
