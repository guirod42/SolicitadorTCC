import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import React, {
    useEffect,
} from 'react';
import {
    Container,
    Title,
    SubTitle
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';

type RequestRouteProp = RouteProp<propsNavigationStack, 'Student'>;

const Student = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    useEffect(() => {

    }, [])

    return (
        <Container>
            <Title>Página alunos</Title>
        </Container>
    )
}

export default Student;