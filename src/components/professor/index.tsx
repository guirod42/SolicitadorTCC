import React, { forwardRef, useState } from 'react';
import {
    Container,
    Title,
    SubTitle,
    Photo,
    PhotoSpace,
    Data,
    Select,
    SelectSpace,
    ProfessorDataProps
} from "./styles";

const Professor = forwardRef((props: ProfessorDataProps, ref) => {
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
                <Select>{'+'}</Select>
            </SelectSpace>
        </Container>
    );
});

export default Professor;