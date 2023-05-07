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
import { Switch } from 'react-native-gesture-handler';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Api from '../../apiService/api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { propsStack } from '../../routes/Stack/Models';
import * as Notifications from 'expo-notifications';
import { StyledTextInputProps } from "../../components/Input/styles";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

const Home = () => {
    const navigation = useNavigation<propsStack>()
    const Image = require('../../images/Uniaraxa.png');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    
    const userInput = React.createRef<StyledTextInputProps>();
    const passInput = React.createRef<StyledTextInputProps>();

    useEffect(() => userInput.current?.resetError, [user]);
    useEffect(() => passInput.current?.resetError, [pass]);

    async function searchUser() {
        if (user === '') {
            userInput.current?.focusOnError();
            return
        }

        if (pass === '') {
            passInput.current?.focusOnError();
            return
        }

        let resposta = 0;

        await Api.get(`/usuarios?login=${user}&password=${pass}`).then(
            async (response: any) => {
                resposta = response.data.length;
                if (resposta == 0) {
                    setTimeout(() => {
                        alert('Usuario e/ou senha inválido!');
                    }, 200);
                    userInput.current?.focusOnError();
                    passInput.current?.focusOnError();
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
            <Button color="green" title="Entrar" onPress={() => searchUser()} />
            <Touch onPress={() => navigation.navigate("RegistrationPage")}>
                <SingUp>
                    {'Cadastre-se'}
                </SingUp>
            </Touch>
        </Container>
    )
}

export default Home;