import React, { forwardRef } from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Data,
    Photo,
    PhotoSpace,
    Select,
    SubTitle,
    Title,
    SelectSpace
} from "./styles";
import { taskInterface } from '../../interface/taskInterface';
import { useTheme } from "styled-components/native";
const Task = forwardRef((props: taskInterface, ref) => {
    const theme = useTheme();
    const handlePress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };

    return (
        <Container>
            <PhotoSpace>
                <Feather
                    name={"check"}
                    color={theme.colors.Text_Primary}
                    size={25}
                />
            </PhotoSpace>
            <Data>
                <Title>{props.Titulo}</Title>
                <SubTitle>{props.Descricao}</SubTitle>
            </Data>
            <SelectSpace onPress={handlePress}>
                <Select>
                    <Feather
                        name={"check"}
                        color={theme.colors.Text_Primary}
                        size={25}
                    />
                </Select>
            </SelectSpace>
        </Container>
    );
});

export default Task;