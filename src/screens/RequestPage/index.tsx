import React from "react";
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from "react-native";
import { Container } from "./styles";
type RequestPageRouteProp = RouteProp<propsNavigationStack, 'RequestPage'>;

const RequestPage = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestPageRouteProp>();
    const userid = params.params?.userId;

    const name = params.params?.userName;

    return (
        <Container>
            <Text>
                {userid} - {name}
            </Text>
        </Container>
    )
}

export default RequestPage;