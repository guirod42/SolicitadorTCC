import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined;
    Registration: undefined;
    Request: {
        userId: number;
        userName: string;
    };
    Professor: {
        userId: number;
        userName: string;
    };
    Student: {
        userId: number;
        userName: string;
    };
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;