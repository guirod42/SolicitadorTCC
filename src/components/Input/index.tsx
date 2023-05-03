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
import { Theme } from 'native-base';

const Input = forwardRef((props: any, ref) => {
    const [sec, setSec] = useState(props.secureTextEntry);
    const [withLock] = useState(props.secureTextEntry);
    const [error, setError] = useState(false);
    const inputRef = React.createRef<StyledTextInputProps>();
    
    useImperativeHandle(ref,() => ({
        focusOnError(){
            setError(true);
            inputRef?.current?.onFocus;
        },
        resetError(){
            setError(false);
        }
    }))

    return (
        <Container>
            <StyledTextInput
                ref={[inputRef]}
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
                    color={"black"}
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