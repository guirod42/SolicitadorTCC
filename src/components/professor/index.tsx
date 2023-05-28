import React, { forwardRef } from 'react';
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