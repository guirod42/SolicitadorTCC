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
    SingUp,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Api from '../../apiService/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { propsStack } from '../../routes/Stack/Models';

const Home = () => {
    const navigation = useNavigation<propsStack>()
    const Image = require('../../images/Uniaraxa.png');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const userInput = useRef<typeof Input>(null);
    const passInput = useRef<typeof Input>(null);

    useEffect(() => userInput.current?.resetError(), [user]);
    useEffect(() => passInput.current?.resetError(), [pass]);

    async function login() {
        if (user === '') {
            alert('Campo usuário está em branco');
            userInput?.current?.focusOnError();
            return
        }

        if (pass === '') {
            alert('Campo senha está em branco');
            passInput?.current?.focusOnError();
            return
        }

        let resposta = 0;

        await Api.get(`/usuarios?login=${user}&password=${pass}`).then(
            async (response: any) => {
                resposta = response.data.length;
                if (resposta == 0) {
                    alert('Usuario e/ou senha inválido!');
                    passInput.current.focusOnError();
                    userInput.current.focusOnError();
                    setPass('');
                    setUser('');
                    return;
                } else {
                    await AsyncStorage.setItem('@SistemaTCC:userName', response.data[0].nome);
                    await AsyncStorage.setItem('@SistemaTCC:userID', String(response.data[0].id));
                    try {
                        if (response.data[0].tipo == 1) {
                            await Api.get("/solicitacoes?AlunoSolicitanteID=" + response.data[0].id).then(async (response) => {
                                if (response.data.length > 0) {
                                    navigation.navigate('RegistrationPage');
                                    return;
                                }
                                navigation.navigate('RegistrationPage');
                                return;
                            }).catch(err => console.log(err));
                            return;
                        }
                        if (response.data[0].tipo == 2) {
                            navigation.navigate('RegistrationPage');
                            return;
                        }
                        alert('Não está achando o tipo');
                        return;
                    }
                    catch (error) {
                        console.error(error);
                    }
                    return;
                }
            }).catch(err => alert(err));
    }

    return (
        <Container>
            <Logo source={Image} />
            <Title>{'Sistema TCC'}</Title>
                <Container>
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
                </Container>
            <Button color="green" title="Entrar" onPress={() => login()} />
            <Touch onPress={() => navigation.navigate("RegistrationPage")}>
                <SingUp>
                    {'Cadastre-se'}
                </SingUp>
            </Touch>
        </Container>
    )
}

export default Home;