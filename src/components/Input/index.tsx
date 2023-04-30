import React from 'react';
import { TextInputProps } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import DefaultTheme from '../../theme/styled'
import {
    Container,
    IconLeft,
    IconRight,
    StyledTextInput,
} from "./styles";

type IconName = "user" | "lock" | "mail" | "rest" | "form" | "link" |
    "picture" | "table" | "filter" | "key" | "find" | "stepforward" |
    "stepbackward" | "forward" | "banckward" | "caretright" | "eye" |
    "eyeo"

interface InputProps extends TextInputProps {
    iconLeft: IconName;
    iconRight: IconName;
}

export function InputText({
    iconLeft,
    iconRight,
    placeholder,
    secureTextEntry,
    ...rest }: InputProps) {
    return (
        <Container>
            <StyledTextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
            <IconLeft>
                <AntDesign name={iconLeft} size={28} color="black" />
            </IconLeft>
            <IconRight>
                <AntDesign
                    name={iconRight}
                    size={28}
                    color="black"
                />
            </IconRight>
        </Container>
    );
};

