import React, { forwardRef } from 'react';
import { Feather } from '@expo/vector-icons'
import { Modal } from 'react-native';
import { useTheme } from "styled-components/native";
import { proposalInterface } from '../../interface/proposalInterface'
import {
    Container,
    Data,
    Title,
    SubTitle,
    Student,
    Accept,
    Refuse,
    Icons
} from "./styles";

interface ProposalDetailsProps extends proposalInterface {
    active: boolean
}

const ProposalDetails = (props: ProposalDetailsProps) => {
    const theme = useTheme();
    const handlePress = () => {
        if (props.onPress) {
            props.onPress();
        }
    };
    return (
        <Modal transparent visible={props.active}>
            <Container>
            <Data>
                <Title
                    numberOfLines={2}>
                    {props.NomeProjeto}</Title>
                <SubTitle
                    numberOfLines={2}
                >{props.Descricao}</SubTitle>
                <Student
                    numberOfLines={2}>
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
        </Modal>
    );
}

export default ProposalDetails;