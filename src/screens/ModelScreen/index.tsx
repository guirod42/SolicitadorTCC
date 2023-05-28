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
import AsyncStorage from '@react-native-async-storage/async-storage';import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';

type RequestRouteProp = RouteProp<propsNavigationStack, 'ModelScreen'>;

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    })
});

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