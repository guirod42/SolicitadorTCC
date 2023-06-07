import React, { forwardRef } from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from "styled-components/native";
import { proposalInterface } from '../../interface/proposalInterface'
import {
    Container,
    Data,
    Photo,
    PhotoSpace,
    Select,
    Accept,
    Refuse,
    SubTitle,
    Title,
    Icons,
    Student,
} from "./styles";

const Proposal = forwardRef((props: proposalInterface, ref) => {
    const theme = useTheme();
    const handlePress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };

    return (
        <Container>
            <Data>
                <Title
                    numberOfLines={2}>
                    {props.NomeProjeto}</Title>
                <SubTitle
                    numberOfLines={2}
                >{props.Descricao}</SubTitle>
                <Student
                    numberOfLines={1}>
                    {props.Solicitante}</Student>
            </Data>


            <Icons>
                <Accept onPress={handlePress}>
                    <Feather
                        name={"check"}
                        color={theme.colors.Text_Primary}
                        size={20}
                    />
                </Accept>
                <Refuse onPress={handlePress}>
                    <Feather
                        name={"x"}
                        color={theme.colors.Text_Primary}
                        size={20}
                    />
                </Refuse>
            </Icons>
        </Container>
    );
});

export default Proposal;