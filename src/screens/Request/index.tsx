import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Container, List, Title, SubTitle } from "./styles";
import Professor from "../../components/Professor";
import { ProfessorDataProps } from "../../components/Professor/styles"
import Api from "../../apiService/api";
import Input from '../../components/Input';
import { StyledTextInputProps } from "../../components/Input/styles";
import Button from '../../components/Button';
type RequestRouteProp = RouteProp<propsNavigationStack, 'Request'>;
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useTheme } from "styled-components/native";

const Request = () => {
    const descriptionInput = React.createRef<StyledTextInputProps>();
    const navigation = useNavigation<propsStack>();
    const searchInput = React.createRef<StyledTextInputProps>();
    const titleInput = React.createRef<StyledTextInputProps>();
    const params = useRoute<RequestRouteProp>();
    const name = params.params.userName;
    const userid = params.params.userId;
    const theme = useTheme();
    const [chosenProfessor, setChosenProfessor] = useState<ProfessorDataProps>();
    const [description, setDescription] = useState<string>('');
    const [professorsList, setProfessorsList] = useState<ProfessorDataProps[]>([]);
    const [search, setSearch] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const filteredProfessors = professorsList.filter(
        (item) => item.nome.toLowerCase().includes(search.toLowerCase())
    );

    const noResultsComponent = (
        <Text style={{ fontStyle: 'italic' }}>Nenhum resultado encontrado</Text>
    );

    async function searchProfessor() {
        await Api.get('/usuarios?tipo=2').then((response) => {
            setProfessorsList(response.data);
        }).catch(err => console.log(err));
    }

    useEffect(
        () => {
            searchProfessor();
        },
        []
    )

    function selectProfessor(professor: ProfessorDataProps) {
        setChosenProfessor(professor);
    }

    return (
        <Container>
            {chosenProfessor == undefined ? (
                <>
                    <SubTitle>Nome</SubTitle>
                    <Title>{'Selecione o professor'}</Title>
                    <Input
                        ref={searchInput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        iconName="search"
                        placeholder="Buscar professor..."
                        onChangeText={setSearch}
                        value={search}
                    />
                    {filteredProfessors.length > 0 ? (
                        <List
                            data={filteredProfessors}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <Professor
                                    onPress={() => selectProfessor(item)}
                                    id={item.id}
                                    nome={item.nome}
                                    imagem={item.imagem}
                                    email={item.email}
                                />
                            )}
                        />
                    ) : (
                        noResultsComponent
                    )}
                </>
            ) : (
                <>
                    <Title>{'Professor selecionado'}</Title>
                    <SubTitle>{chosenProfessor.nome}</SubTitle>
                    <SubTitle>{'Título da proposta de TCC'}</SubTitle>
                    <Input
                        ref={titleInput}
                        autoCapitalize="true"
                        autoCorrect={false}
                        iconName="file-text"
                        placeholder="Título da proposta"
                        onChangeText={setTitle}
                        value={title}
                    />
                    <SubTitle>{'Descrição'}</SubTitle>
                    <Input
                        ref={descriptionInput}
                        autoCapitalize="true"
                        autoCorrect={false}
                        heightChange={true}
                        iconName="file-text"
                        placeholder="Descrição da proposta"
                        onChangeText={setDescription}
                        value={description}
                    />
                    <Button
                        color={theme.colors.Alert}
                        onPress={() => setChosenProfessor(undefined)}
                        title="Alterar professor"
                    />
                </>
            )}
        </Container>
    );
}

export default Request;