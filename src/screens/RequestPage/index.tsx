import React, { useEffect, useState } from "react";
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Text } from "react-native";
import { Container, List, Title } from "./styles";
import Professor from "../../components/Professor";
import { ProfessorDataProps } from "./../../components/Professor/styles"
import Api from "../../apiService/api";
import Input from '../../components/Input';
import { StyledTextInputProps } from "../../components/Input/styles";
type RequestPageRouteProp = RouteProp<propsNavigationStack, 'RequestPage'>;

const RequestPage = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestPageRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    const [professorsList, setProfessorsList] = useState<ProfessorDataProps[]>([]);
    const searchInput = React.createRef<StyledTextInputProps>();
    const [search, setSearch] = useState<string>('');
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

    return (
        <Container>
            <Title>{'Selecione o professor'}</Title>
            <Input
                ref={searchInput}
                autoCorrect={false}
                autoCapitalize="none"
                iconName={"search"}
                placeholder={"Buscar professor..."}
                value={search}
                onChangeText={setSearch}
            />

            {filteredProfessors.length > 0 ? (
                <List
                    data={filteredProfessors}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Professor
                            id={item.id}
                            nome={item.nome}
                            imagem={item.imagem}
                            email={item.email} />
                    } />
            )
                : (noResultsComponent)
            }
        </Container>
    )
}

export default RequestPage;