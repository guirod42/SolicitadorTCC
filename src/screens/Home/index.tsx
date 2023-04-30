import React, {
    useState,
    createRef,
    useEffect,
    useRef,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Logo,
    Title,
    Touch,
    SingUp
} from './styles';
import { dtsGenerator } from 'dts-gen';
import Input from '../../components/Input';
import Button from '../../components/Button';

export function Home() {
    const navigation = useNavigation();
    const Image = require('../../images/Uniaraxa.png');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userInput = useRef<dtsGenerator<typeof Input>>(null);
    const passInput = useRef<dtsGenerator<typeof Input>>(null);

    useEffect(() => userInput.current?.resetError(), [user]);
    useEffect(() => passInput.current?.resetError(), [pass]);

    function teste() {
        if (user === '') {
            alert('erro de usuário');
            userInput.current.focusOnError();
            return
        }

        if (pass === '') {
            alert('erro de senha');
            passInput.current.focusOnError();
            return
        }
    }

    return (
        <Container>
            <Logo source={Image} />
            <Title>{'Solicitação de TCC'}</Title>
            <Input
                ref={userInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"user"}
                placeholder="Usuário"
                value={user}
                onChangeText={setUser}
            />
            <Input
                ref={passInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"lock"}
                placeholder="Senha"
                value={pass}
                onChangeText={setPass}
                secureTextEntry
            />

            <Button color="green" title="Entrar" onPress={() => teste()} />

            <Touch
            >
                <SingUp>
                    {'Cadastre-se'}
                </SingUp>
            </Touch>
        </Container>
    )
}