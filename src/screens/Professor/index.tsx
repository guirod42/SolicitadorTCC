import * as Notifications from 'expo-notifications';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import React, {
    useEffect,
    useState,
    useRef,
} from 'react';
import {
    Container,
    Title,
    SubTitle
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';

type RequestRouteProp = RouteProp<propsNavigationStack, 'Professor'>;

const Professor = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    useEffect(() => {

    }, [])

    function seeProfile() {
        navigation.navigate('UserProfile', {
            userId: userid,
        });
    }

    return (
        <Container>
            <Title>{'Página do Professor ' + name}</Title>
            <Button
                color="green"
                title="Abrir perfil"
                onPress={() => seeProfile()} />
        </Container>
    )
}

export default Professor;