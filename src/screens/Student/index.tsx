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
type RequestRouteProp = RouteProp<propsNavigationStack, 'Student'>;
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';

const Student = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    useEffect(() => {

    }, [])

    return (
        <Container />
    )
}

export default Student;