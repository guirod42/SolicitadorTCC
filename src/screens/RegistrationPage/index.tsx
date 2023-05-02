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
import Input from '../../components/Input';
import Button from '../../components/Button';
import { propsStack } from '../../routes/Stack/Models';

const RegistrationPage = () => {
    const navigation = useNavigation<propsStack>()

    return (
        <Container>
            <Title>{'Cadastre-se'}</Title>
            {/*<Input
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
    />*/}
        </Container>
    )
}

export default RegistrationPage;