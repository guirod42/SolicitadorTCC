import * as Notifications from 'expo-notifications';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { propsStack, propsNavigationStack } from '../../routes/Stack/Models';
import { Text } from "react-native";
import React, {
    useEffect,
    useState,
    useRef,
} from 'react';
import {
    Container,
    Title1,
    Title2,
    SubTitle,
    List
} from './styles';
import Api from '../../apiService/api.js';
import Button from '../../components/Button';
import Proposal from '../../components/Proposal';
import { proposalInterface } from '../../interface/proposalInterface'

type RequestRouteProp = RouteProp<propsNavigationStack, 'Professor'>;

const Professor = () => {
    const navigation = useNavigation<propsStack>();
    const params = useRoute<RequestRouteProp>();
    const userid = params.params?.userId;
    const name = params.params?.userName;
    const [proposalList, setProposalList] = useState<proposalInterface[]>([]);
    const noResultsComponent = (
        <Text style={{ fontStyle: 'italic' }}>Nenhum resultado encontrado</Text>
    );

    async function searchProfessor() {
        await Api.get('/solicitacoes?ProfessorOrientadorID=6').then((response) => {
            setProposalList(response.data);
        }).catch(err => console.log(err));
    }

    useEffect(
        () => {
            searchProfessor();
        },
        []
    )

    function seeProfile() {
        navigation.navigate('UserProfile', {
            userId: userid,
        });
    }

    return (
        <Container>
            <Title1>{'Olá professor(a)'}</Title1>
            <Title2>{name}</Title2>
            <SubTitle>Estas solicitações aguardam sua resposta</SubTitle>
            <Proposal
                Solicitante='Solicitado por: Guilherme Silva Rodrigues'
                NomeProjeto='Uma ferramenta para o monitoramento de sistemas de banco de dados'
                Descricao='Uma ferramenta de monitoramento de sistemas de banco de dados é 
                essencial para garantir o desempenho, segurança e disponibilidade desses 
                sistemas. Ela fornece monitoramento em tempo real, detecção de problemas, ações 
                corretivas eficientes e alertas para administradores. Com essa ferramenta, é 
                possível acompanhar métricas importantes, como tempo de resposta, consumo de 
                recursos e atividade de transações, garantindo um ambiente saudável e seguro 
                para os dados armazenados.'
            />
            <Proposal
                Solicitante='Solicitado por: Samuel Marcelino'
                NomeProjeto='Desenvolvimento de Software: transição de cultura em empresas'
                Descricao='A transição de cultura em empresas no desenvolvimento de software é
                um processo fundamental para promover mudanças positivas e alcançar melhores
                resultados. Essa transição envolve a adoção de práticas ágeis, colaborativas e
                orientadas para o cliente, em contraste com abordagens mais tradicionais e
                hierárquicas. É necessário investir em treinamentos, capacitação e
                conscientização para que todos os membros da equipe compreendam e adotem essa
                nova mentalidade. Além disso, a comunicação eficaz, o trabalho em equipe e a
                valorização da aprendizagem contínua são aspectos essenciais nessa transição.
                Ao promover uma cultura de desenvolvimento de software mais ágil e centrada no
                cliente, as empresas podem aumentar a produtividade, a qualidade do produto e a
                satisfação do cliente, gerando impactos positivos em seus resultados e
                posicionamento no mercado.'
            />
            <Proposal
                Solicitante='Solicitado por: Carlos Rodrigues'
                NomeProjeto='Blockchain como alternativa para autenticação e controle de acesso
                em internet das coisas'
                Descricao='O Blockchain tem sido considerado uma alternativa promissora para
                lidar com os desafios de autenticação e controle de acesso na Internet das Coisas
                (IoT). A natureza descentralizada e imutável do Blockchain permite a criação de
                registros distribuídos, nos quais os dispositivos IoT podem ser autenticados e
                autorizados de forma segura. Ao usar chaves criptográficas e contratos
                inteligentes, o Blockchain oferece um meio confiável para verificar a identidade
                dos dispositivos e controlar seu acesso a dados e recursos. Isso pode ser
                especialmente relevante em ambientes IoT complexos, nos quais há uma infinidade
                de dispositivos interconectados. Ao adotar o Blockchain como solução de
                autenticação e controle de acesso, as empresas podem mitigar riscos de segurança,
                garantir a integridade dos dados e promover maior confiança e transparência em
                seus ecossistemas de IoT.'
            />

            {/*}
            <Button
                color="green"
                title="Abrir perfil"
                onPress={() => seeProfile()} />
            */}
        </Container>
    )
}

export default Professor;