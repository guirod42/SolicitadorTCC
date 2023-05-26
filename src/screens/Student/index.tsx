import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container
} from './styles';
import Api from '../../apiService/api.js';
import { propsStack } from '../../routes/Stack/Models';

const Student = () => {

    const navigation = useNavigation<propsStack>();
    useEffect(() => {

    }, [])

    return (
        <Container />
    )
}

export default Student;