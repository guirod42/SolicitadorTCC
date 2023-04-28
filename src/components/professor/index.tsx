import {
    Container,
    Photo,
    Name,
    Specialist,
    ProfessorProps
} from "./styles";



export function Professor({type}: ProfessorProps) {
    return (
        <Container type={ type }>
            <Photo source={{uri: "https:github.com/guirod42.png"}}
            />

            <Name>
                Guilherme Silva Rodrigues
            </Name>

            <Specialist>
                IoT
            </Specialist>
        </Container>
    )
}