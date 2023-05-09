import React, {
    useState,
    useEffect,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Logo,
    Title,
    SingUp,
    Touch
} from './styles';
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
    const [user, setUser] = useState('Guilherme');
    const [pass, setPass] = useState('12345');

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

        await Api.get(`/usuarios?login=${user}&password=${pass}`).then(
            async (responseUser: any) => {
                let i = responseUser.data.length;
                if (i == 0) {
                    setTimeout(() => {
                        alert('Usuario e/ou senha inválido!');
                    }, 0);
                    userInput.current?.focusOnError();
                    passInput.current?.focusOnError();
                    return;
                } else {
                    await AsyncStorage.setItem('@SistemaTCC:userName', responseUser.data[0].nome);
                    await AsyncStorage.setItem('@SistemaTCC:userID', String(responseUser.data[0].id));
                    try {
                        if (responseUser.data[0].tipo == 1) {
                            await Api.get("/solicitacoes?AlunoSolicitanteID=" + responseUser.data[0].id).then(async (response) => {
                                if (response.data.length > 0) {
                                    navigation.navigate('RequestPage', {
                                        userId: responseUser.data[0].id,
                                        userName: responseUser.data[0].nome
                                    });
                                    return;
                                }
                                navigation.navigate('RequestPage', {
                                    userId: responseUser.data[0].id,
                                    userName: responseUser.data[0].nome
                                });
                                return;
                            }).catch(err => console.log(err));
                            return;
                        }
                        if (responseUser.data[0].tipo == 2) {
                            navigation.navigate('RegistrationPage');
                            return;
                        }
                        alert('Não está achando o tipo');
                        return;
                    }
                    catch (err) {
                        console.error(err);
                    }
                    return;
                }
            }).catch(err => alert(err));
    }

    return (
        <Container>
            <Logo source={Image} />
            <Title>{'Sistema TCC'}</Title>
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
            <Button
                color="green"
                title="Entrar"
                onPress={() => searchUser()} />
            <Touch onPress={() => navigation.navigate("RegistrationPage")}>
                <SingUp>
                    {'Cadastre-se'}
                </SingUp>
            </Touch>
        </Container>
    )
}

export default Home;