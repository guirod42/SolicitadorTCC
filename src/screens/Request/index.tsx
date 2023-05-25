import React, { useEffect, useState } from "react";
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from "react-native";
import { Container, List, Title, SubTitle } from "./styles";
import Professor from "../../components/Professor";
import { ProfessorDataProps } from "../../components/Professor/styles"
import Api from "../../apiService/api";
import Input from '../../components/Input';
import { StyledTextInputProps } from "../../components/Input/styles";
import Button from '../../components/Button';
type RequestRouteProp = RouteProp<propsNavigationStack, 'Request'>;
import { useTheme } from "styled-components/native";

const Request = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    const [chosenProfessor, setChosenProfessor] = useState<ProfessorDataProps>();
    const [professorsList, setProfessorsList] = useState<ProfessorDataProps[]>([]);
    const searchInput = React.createRef<StyledTextInputProps>();
    const titleInput = React.createRef<StyledTextInputProps>();
    const descriptionInput = React.createRef<StyledTextInputProps>();
    const [search, setSearch] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const theme = useTheme();

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
                    <Title>{'Selecione o professor'}</Title>
                    <Input
                        ref={searchInput}
                        autoCorrect={false}
                        autoCapitalize="none"
                        iconName="search"
                        placeholder="Buscar professor..."
                        value={search}
                        onChangeText={setSearch}
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
                        autoCorrect={false}
                        autoCapitalize="true"
                        iconName="file-text"
                        placeholder="Título da proposta"
                        value={title}
                        onChangeText={setTitle}

                    />

                    <SubTitle>{'Descrição'}</SubTitle>
                    <Input
                        ref={descriptionInput}
                        autoCorrect={false}
                        autoCapitalize="true"
                        iconName="file-text"
                        placeholder="Descrição da proposta"
                        value={description}
                        onChangeText={setDescription}
                        heightChange={false}
                    />
                    <Button
                        color={theme.colors.Alert}
                        title="Alterar professor"
                        onPress={() => setChosenProfessor(undefined)} />
                </>
            )}
        </Container>
    );
}

export default Request;