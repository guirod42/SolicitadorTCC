import React, {
    useState,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Icon,
    IconPass,
    StyledTextInput,
    StyledTextInputProps,
} from "./styles";
import { useTheme } from "styled-components/native";


const Input = forwardRef((props: any, ref) => {
    const [sec, setSec] = useState(props.secureTextEntry);
    const [withLock] = useState(props.secureTextEntry);
    const [error, setError] = useState(false);
    const inputRef = React.createRef<StyledTextInputProps>();
    const theme = useTheme();

    useImperativeHandle(ref, () => ({
        focusOnError() {
            setError(true);
            inputRef?.current?.onFocus;
        },
        resetError() {
            setError(false);
        }
    }))

    return (
        <Container>
            <StyledTextInput
                ref={[inputRef]}
                underlineColorAndroid='transparent'
                placeholderTextColor={theme.colors.Primary_700}
                borderAlert={error ? true : false}
                lockIcon={withLock}
                {...props}
                secureTextEntry={sec}
                cursorColor={theme.colors.Text_Primary}
            />

            <Icon>
                <Feather
                    name={props.iconName}
                    size={30}
                    color={theme.colors.Text_Primary}
                />
            </Icon>

            {props.secureTextEntry && (
                <IconPass
                    onPress={() => setSec(!sec)}
                >
                    <Feather
                        name={sec ? "eye-off" : "eye"}
                        size={30}
                        color={theme.colors.Text_Primary}
                    />
                </IconPass>
            )}
        </Container>
    );
});


export default Input;