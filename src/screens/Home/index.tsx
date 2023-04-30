import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Logo,
    Title
} from './styles';
import { InputText } from '../../components/Input';

export function Home() {
    const Image = require('../../images/Uniaraxa.png');
    const navigation = useNavigation();

    /*
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
    */

    return (
        <Container>
            <Logo source={Image} />
            <Title>{'Solicitação de TCC'}</Title>
            <InputText
                placeholder='Usuário'
                iconLeft ='user'
                iconRight='eyeo'
            />
            <InputText
                placeholder='Senha'
                iconLeft ='lock'
                iconRight='eyeo'
                secureTextEntry
            />
        </Container>
    )
}