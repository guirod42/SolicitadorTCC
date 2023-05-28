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
type RequestRouteProp = RouteProp<propsNavigationStack, 'ModelScreen'>;
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';

const ModelScreen = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const param1 = params.params?.param1;
    const param2 = params.params?.param2;
    useEffect(() => {

    }, [])

    return (
        <Container>
            
        </Container>
    )
}

export default ModelScreen;