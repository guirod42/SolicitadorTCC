import React, { forwardRef } from 'react';
import { Feather } from '@expo/vector-icons'
import {
    Container,
    Data,
    Photo,
    PhotoSpace,
    ProfessorDataProps,
    Select,
    SelectSpace,
    SubTitle,
    Title,
} from "./styles";
import { useTheme } from "styled-components/native";    
const Professor = forwardRef((props: ProfessorDataProps, ref) => {
    const theme = useTheme();
    const handlePress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };

    return (
        <Container>
            <PhotoSpace>
                <Photo source={{ uri: props.imagem }} />
            </PhotoSpace>
            <Data>
                <Title>{props.nome}</Title>
                <SubTitle>{props.email}</SubTitle>
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

export default Professor;