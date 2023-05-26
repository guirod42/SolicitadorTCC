import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./Models";
import Home from '../../screens/Home'
import Registration from '../../screens/Registration'
import Request from "../../screens/Request";
import Professor from "../../screens/Professor";
import Student from "../../screens/Student";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }} >
            <Screen name="Home" component={Home} />
            <Screen name="Registration" component={Registration} />
            <Screen name="Request" component={Request} />
            <Screen name="Professor" component={Professor} />
            <Screen name="Student" component={Student} />

        </Navigator>
    )
}
