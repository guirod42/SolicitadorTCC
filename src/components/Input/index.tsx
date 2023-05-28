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
    const inputRef = React.createRef<StyledTextInputProps>();
    const theme = useTheme();
    const [sec, setSec] = useState(props.secureTextEntry);
    const [error, setError] = useState(false);
    const [inputHeight, setInputHeight] = useState(0);
    const [textFlex] = useState(props.heightChange);
    const [withLock] = useState(props.secureTextEntry);

    useImperativeHandle(ref, () => ({
        focusOnError() {
            setError(true);
            inputRef?.current?.onFocus;
        },
        resetError() {
            setError(false);
        }
    }));

    return (
        <Container>
            <StyledTextInput
                ref={[inputRef]}
                borderAlert={error ? true : false}
                cursorColor={error ? theme.colors.Alert : theme.colors.Text_Primary}
                inputHigh={inputHeight}
                lockIcon={withLock}
                multiline={textFlex}
                onContentSizeChange={(e) => setInputHeight(e.nativeEvent.contentSize.height)}
                placeholderTextColor={theme.colors.Primary_700}
                secureTextEntry={sec}
                underlineColorAndroid='transparent'
                {...props}
            />

            <Icon>
                <Feather
                    color={error ? theme.colors.Alert : theme.colors.Text_Primary}
                    name={props.iconName}
                    size={30}
                />
            </Icon>

            {props.secureTextEntry && (
                <IconPass
                    onPress={() => setSec(!sec)} >
                    <Feather
                        color={error ? theme.colors.Alert : theme.colors.Text_Primary}
                        name={sec ? "eye-off" : "eye"}
                        size={30}
                    />
                </IconPass>
            )}
        </Container>
    );
});

export default Input;