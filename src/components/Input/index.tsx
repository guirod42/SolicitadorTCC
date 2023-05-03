import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useRef,
} from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Icon,
    IconPass,
    StyledTextInput,
    StyledTextInputProps
} from "./styles";
import { TextInputProps } from 'react-native';

const Input = forwardRef((props: StyledTextInputProps, ref) => {
    const [sec, setSec] = useState(props.secureTextEntry);
    const [withLock] = useState(props.secureTextEntry);
    const [error, setError] = useState(false);
    const inputRef = useRef<StyledTextInputProps>(null);

    function focusOnForm() {
        if (inputRef.current) {
            inputRef.current.onFocus();
            setError(true);
        }
    }

    useImperativeHandle(ref, () => ({
        focusOnForm: focusOnForm,
    }));

    return (
        <Container>
            <StyledTextInput
                ref={inputRef}
                underlineColorAndroid='transparent'
                placeholderTextColor={'#a0a0a0'}
                borderAlert={error ? true : false}
                lockIcon={withLock}
                {...props}
                secureTextEntry={sec}
            />

            <Icon>
                <Feather
                    name={props.iconName}
                    size={30}
                    color="black"
                />
            </Icon>

            {props.secureTextEntry && (
                <IconPass
                    onPress={() => setSec(!sec)}
                >
                    <Feather
                        name={sec ? "eye-off" : "eye"}
                        size={30}
                        color="black"
                    />
                </IconPass>
            )}
        </Container>
    );
});

export default Input;
