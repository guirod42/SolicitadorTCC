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

const BaseScreen = () => {

    useEffect(() => {

    }, [])

    return (
        <Container />
    )
}

export default BaseScreen;