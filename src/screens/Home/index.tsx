import { Container, List } from './styles';
import { Professor, ProfessorDataProps } from '../../components/professor';

export function Home() {

    const data = [
        {id: '1', photo: 'https://github.com/guirod42.png', name: 'Guilherme Silva Rodrigues', specialist: 'Estudante SIF'},
        {id: '2', photo: 'https://github.com/guirod42.png', name: 'Guilherme Rodrigues', specialist: 'Estudante SIF'},
        {id: '3', photo: 'https://github.com/guirod42.png', name: 'Guilherme Silva Rodrigues', specialist: 'Estudante SIF'},
        {id: '4', photo: 'https://github.com/guirod42.png', name: 'Guilherme Rodrigues', specialist: 'Estudante SIF'},
        {id: '5', photo: 'https://github.com/guirod42.png', name: 'Guilherme Silva Rodrigues', specialist: 'Estudante SIF'},
        {id: '6', photo: 'https://github.com/guirod42.png', name: 'Guilherme Rodrigues', specialist: 'Estudante SIF'},
        {id: '7', photo: 'https://github.com/guirod42.png', name: 'Guilherme Silva Rodrigues', specialist: 'Estudante SIF'},
        {id: '8', photo: 'https://github.com/guirod42.png', name: 'Guilherme Rodrigues', specialist: 'Estudante SIF'},
        {id: '9', photo: 'https://github.com/guirod42.png', name: 'Guilherme Silva Rodrigues', specialist: 'Estudante SIF'},
        {id: '10', photo: 'https://github.com/guirod42.png', name: 'Guilherme Rodrigues', specialist: 'Estudante SIF'},
    ]

    return (
        <Container>
            <List
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Professor type="primary" data={item}/>}
                numColumns={2}
            >
            </List>
        </Container>
    )
}