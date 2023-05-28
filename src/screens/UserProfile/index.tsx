import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { userInterface } from '../../interface/userInterface';
import {
    Container,
    Title,
    SubTitle
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';
import UserContact from '../../components/UserContact';

type RequestRouteProp = RouteProp<propsNavigationStack, 'UserProfile'>;

const UserProfile = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userId = params.params?.userId;
    const [userProfile, setUserProfile] = useState<userInterface>();

    async function searchUserData() {
        await Api.get(`/usuarios?id=${userId}`).then((response) => {
            console.log(response.data);
            setUserProfile(response.data[0]);
        }).catch(err => console.log(err));
    }

    useEffect(
        () => {
            searchUserData();
        },
        []
    )

    return (
        <Container>
            <Title>Página de Perfil</Title>
            <SubTitle>{`Nome: ${userProfile?.nome}`}</SubTitle>
        </Container>
    )
}

export default UserProfile;