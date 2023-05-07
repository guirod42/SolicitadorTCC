import {
    Container,
    Photo,
    Name,
    Specialist,
    ProfessorProps
} from "./styles";

export type ProfessorDataProps = {
    id: string,
    photo: string,
    name: string,
    specialist: string,
}

type Props = ProfessorProps & {
    data: ProfessorDataProps;
}
/*
export function Professor({type , data, ...rest }: Props) {
    return (
        <Container type={ type } { ...rest}>
            <Photo source={{uri: data.photo}}
            />
            <Name>
                {data.name}
            </Name>
            <Specialist>
                {data.specialist}
            </Specialist>
        </Container>
    )
}
*/