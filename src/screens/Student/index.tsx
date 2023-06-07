import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { projectInterface } from './../../interface/projectInterface'
import { taskInterface } from './../../interface/taskInterface'
import { userInterface } from './../../interface/userInterface'
import { Text } from "react-native";
import React, {
    useEffect,
    useState,
} from 'react';
import {
    Container,
    Title,
    SubTitle,
    List
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';
import Task from '../../components/Task';

type RequestRouteProp = RouteProp<propsNavigationStack, 'Student'>;

const Student = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    const [advisor, setAdvisor] = useState<userInterface>();
    const [project, setProject] = useState<projectInterface>();
    const [taskList, setTaskList] = useState<taskInterface[]>([]);
    const [taskFinishedList, setTaskFinishedList] = useState<taskInterface[]>([]);

    async function searchProject() {
        let temp
        await Api.get('/solicitacoes?AlunoSolicitanteID=' + userid).then((response) => {
            setProject(response.data[0]);
            Api.get('/tarefas?ProjetoID=' + response.data[0].id).then((response) => {
                setTaskList(response.data);
            }).catch(err => console.log(err));

            Api.get('/usuarios?id=' + response.data[0].ProfessorOrientadorID).then((response) => {
                setAdvisor(response.data[0]);
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));

    }
    const noResultsComponent = (
        <Text style={{ fontStyle: 'italic' }}>Nenhuma tarefa encontrada</Text>
    );

    useEffect(
        () => {
            searchProject();
        },
        []
    )

    function testevoid(): void {
    }

    return (
        <Container>
            <Title>Olá {name}</Title>
            <SubTitle>Seu projeto de TCC: {project?.NomeProjeto}</SubTitle>
            <SubTitle>Professor: {advisor?.nome}</SubTitle>

            {taskList.length > 0 ? (
                <>
                    <SubTitle>As seguintes tarefas estão em execução:</SubTitle>
                    <List
                        data={taskList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Task
                                onPress={() => testevoid()}
                                id={item.id}
                                Titulo={item.Titulo}
                                Descricao={item.Descricao}
                            />
                        )}
                    />
                </>
            ) : (
                noResultsComponent
            )}
            {taskList.length > 0 ? (
                <>
                    <SubTitle>As seguintes tarefas estão em execução:</SubTitle>
                    <List
                        data={taskList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Task
                                onPress={() => testevoid()}
                                id={item.id}
                                Titulo={item.Titulo}
                                Descricao={item.Descricao}
                            />
                        )}
                    />
                </>
            ) : (
                noResultsComponent
            )}
        </Container>
    )
}

export default Student;