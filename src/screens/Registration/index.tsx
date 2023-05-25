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
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { propsStack } from '../../routes/Stack/Models';
import Api from '../../apiService/api.js';
import { StyledTextInputProps } from "../../components/Input/styles";
import { useTheme } from "styled-components/native";

const Registration = () => {
    const navigation = useNavigation<propsStack>()
    const Image = require('../../images/Uniaraxa.png');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [userType, setUserType] = useState('Aluno');
    const [userLogin, setUserLogin] = useState('Matrícula (RA)');
    const [typeStudant, setTypeStudant] = useState(false);
    const theme = useTheme();

    const nameInput = React.createRef<StyledTextInputProps>();
    const emailInput = React.createRef<StyledTextInputProps>();
    const userInput = React.createRef<StyledTextInputProps>();
    const passInput = React.createRef<StyledTextInputProps>();
    const passConfInput = React.createRef<StyledTextInputProps>();

    useEffect(() => nameInput.current?.resetError, [name]);
    useEffect(() => emailInput.current?.resetError, [email]);
    useEffect(() => userInput.current?.resetError, [user]);
    useEffect(() => passInput.current?.resetError, [pass]);
    useEffect(() => passConfInput.current?.resetError, [passConf]);

    async function changeType() {
        let studProf = typeStudant ? 'Aluno' : 'Professor';
        let login = typeStudant ? 'Matrícula (RA)' : 'Usuário';
        setTypeStudant(state => !state);
        setUserType(studProf);
        setUserLogin(login);
    }

    async function checkRegistration() {
        let validations = [];
        let validRegistration = true;
        if (name.trim() === '') {
            validations.push('Campo nome é obrigatório');
            nameInput.current?.focusOnError();
            validRegistration = false;
        }
        if (email.trim() === '') {
            validations.push('Campo e-mail é obrigatório');
            emailInput.current?.focusOnError();
            validRegistration = false;
        }
        if (user.trim() === '') {
            validations.push(`Campo ${userLogin} é obrigatório`);
            userInput.current?.focusOnError();
            validRegistration = false;
        }
        if (pass.trim() === '') {
            validations.push('Campo senha é obrigatório');
            passInput.current?.focusOnError();
            validRegistration = false;
        }
        if (passConf.trim() === '') {
            validations.push('Repita a senha no segundo campo');
            passConfInput.current?.focusOnError();
            validRegistration = false;
        }
        if (pass.trim() != passConf) {
            validations.push('Repita a mesma senha duas vezes');
            passConfInput.current?.focusOnError();
            validRegistration = false;
        }
        let validCheck = {
            validRegistration: validRegistration,
            validations: validations
        };
        return validCheck;
    }

    async function register() {
        await checkRegistration()
            .then(response => {
                if (response.validRegistration) {
                    let objNewPerson = {
                        id: null,
                        nome: name,
                        email: email,
                        login: user,
                        password: pass,
                        tipo: typeStudant ? 1 : 2
                    }
                    console.log(Api.post('/usuarios', objNewPerson));
                    alert('Usuário Criado!');
                    navigation.navigate('Home');
                    return;
                }
                else {
                    response.validations.forEach(item => {
                        alert(item);
                    });
                    return;
                }
            }).catch(err => alert(err))
    };

    return (
        <Container>
            <Logo source={Image} />
            <Title>Cadastro de {userType}</Title>
            <Input
                ref={nameInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"user"}
                placeholder="Nome completo"
                value={name}
                onChangeText={setName} />
            <Input
                ref={emailInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"mail"}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail} />
            <Input
                ref={userInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"info"}
                placeholder={userLogin}
                value={user}
                onChangeText={setUser} />
            <Input
                ref={passInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"lock"}
                placeholder="Senha"
                value={pass}
                onChangeText={setPass}
                secureTextEntry />
            <Input
                ref={passConfInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"lock"}
                placeholder="Confirmação de Senha"
                value={passConf}
                onChangeText={setPassConf}
                secureTextEntry />
            <Button
                color={typeStudant ? theme.colors.User_Type_1 : theme.colors.User_Type_2}
                title="Cadastrar"
                onPress={() => register()} />
            <Button
                color={typeStudant ? theme.colors.User_Type_1 : theme.colors.User_Type_2}
                title={"Eu não sou " + userType}
                onPress={() => changeType()} />
        </Container>
    )
}

export default Registration;