import React, {
    useState,
    useEffect,
    useRef,
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
import { Camera, CameraType } from 'expo-camera';
import { StylesNotificationBody } from '../../interface/inputInterface';
import Loading from '../../components/Loading';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    })
});

const Home = () => {
    const navigation = useNavigation<propsStack>();
    const Image = require('../../images/Uniaraxa.png');
    const userInput = React.createRef<StyledTextInputProps>();
    const passInput = React.createRef<StyledTextInputProps>();
    const notificationReceivedRef = useRef<any>();
    const notificationResponseRef = useRef<any>();
    const stylesNotification = useRef<StylesNotificationBody>();
    const [flLoading, setLoading] = useState<boolean>(false)
    const [user, setUser] = useState<string>('Guilherme');
    const [pass, setPass] = useState<string>('12345');
    const [expoToken, setExpoToken] = useState<string>('');
    const [notificationTitle, setNotificationTitle] = useState<string>('');
    const [type, setType] = useState<CameraType>(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    useEffect(() => userInput.current?.resetError, [user]);
    useEffect(() => passInput.current?.resetError, [pass]);

    async function handleCallNotification(props?: StylesNotificationBody) {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Título da notificação',
                body: 'Corpo da notificação 42',
                priority: 'true',
                data: {},
            },
            trigger: {
                seconds: 1,
            }
        })
    }

    useEffect(() => {
        handleTokenPush();
        notificationReceivedRef.current = Notifications.addNotificationReceivedListener(notification => {
            setNotificationTitle(notification.request.content.title || "");
        });
        notificationResponseRef.current = Notifications.addNotificationResponseReceivedListener(notification => {
            setNotificationTitle(notification.notification.request.content.title || "");
        })
    }, [])

    const handleTokenPush = async () => {

        const { status } = await Notifications.getPermissionsAsync();
        if (status != 'granted') {
            alert('Sem permissão de notificação');
            return;
        }
        //let deviceToken = (await Notifications.getDevicePushTokenAsync()).data
        let ExpoTK = (await Notifications.getExpoPushTokenAsync()).data
        setExpoToken(ExpoTK);
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    async function searchUser() {
        setLoading(true);
        if (user === '') {
            userInput.current?.focusOnError();
            return
        }

        if (pass === '') {
            passInput.current?.focusOnError();
            return
        }
        await Api.get(`/usuarios?login=${user}&password=${pass}`)
            .then(
                async (responseUser: any) => {
                    let i = responseUser.data.length;
                    if (i == 0) {
                        alert('Usuario e/ou senha inválido!');
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
                                }).catch(error => console.log(error));
                                return;
                            }
                            if (responseUser.data[0].tipo == 2) {
                                navigation.navigate('RegistrationPage');
                                return;
                            }
                            alert('Não está achando o tipo');
                            return;
                        }
                        catch (error) {
                            console.log(error);
                        }
                        return;
                    }
                }
            ).catch(error => alert(error));
            
        setLoading(false);
    }

    return (
        <Container>
            <Loading active={flLoading} />
            <Logo source={Image} />
            <Title>{'Sistema TCC'}</Title>
            <Input
                ref={userInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"user"}
                placeholder={"Usuário"}
                value={user}
                onChangeText={setUser}
            />
            <Input
                ref={passInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"lock"}
                placeholder={"Senha"}
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

            {/*
            <Button
                color="black"
                title="Load"
                onPress={() => setLoading(!flLoading)} />
            <Button
                color="black"
                title="Token"
                onPress={() => handleCallNotification()} />
            <Button
                color="pink"
                title="Camera"
                onPress={() => toggleCameraType()} />
            */}
            <SingUp>
                {notificationTitle}
            </SingUp>
        </Container>
    )
}

export default Home;