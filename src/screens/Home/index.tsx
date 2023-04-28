import { Container, Text } from './styles';
import { Professor } from '../../components/professor';

export function Home() {
    return (
        <Container>
            <Text>
                <Professor type='primary'/>
            </Text>
        </Container>
    )
}