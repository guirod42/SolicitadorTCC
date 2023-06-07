export interface projectInterface {
    id: number,
    AlunoSolicitante?: string,
    ProfessorOrientador?: string,
    NomeProjeto: string,
    Descricao: string,
    Status: number;
    DataAceiteProfessor: Date;
}