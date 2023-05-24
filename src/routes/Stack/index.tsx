import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import Home from '../../screens/Home'
import RegistrationPage from '../../screens/RegistrationPage'
import RequestPage from "../../screens/RequestPage";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }} >
            <Screen name="Home" component={Home} />
            <Screen name="RegistrationPage" component={RegistrationPage} />
            <Screen name="RequestPage" component={RequestPage} />
        </Navigator>
    )
}
