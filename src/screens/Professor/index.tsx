import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
    Container,
    Title,
    SubTitle
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';
type RequestRouteProp = RouteProp<propsNavigationStack, 'Professor'>;
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';

const Professor = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    useEffect(() => {

    }, [])

    function seeProfile(){
        navigation.navigate('UserProfile', {
            userId: userid,
        });
    }


    return (
        <Container>
            <Title>{'Página do Professor '+ name}</Title>
            <Button
                color="green"
                title="Abrir perfil"
                onPress={() => seeProfile()} />
        </Container>
    )
}

export default Professor;