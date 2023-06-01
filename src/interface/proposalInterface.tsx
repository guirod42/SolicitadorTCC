export interface proposalInterface {
    id?: number,
    AlunoSolicitanteID?: string,
    ProfessorOrientadorID?: string,
    NomeProjeto: string,
    Descricao: string,
    onPress?(): void;
    Solicitante: string;
}