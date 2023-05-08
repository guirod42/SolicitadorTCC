import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined
    RegistrationPage: undefined
    RequestPage?: {
        userId: number,
        userName: string
    };
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
