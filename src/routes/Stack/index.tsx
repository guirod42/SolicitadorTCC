import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../screens/Home'
import RegistrationPage from '../../screens/RegistrationPage'
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="RegistrationPage" component={RegistrationPage} />
        </Navigator>
    )
}
