export interface taskInterface {
    id: string,
    ProjetoID?: string,
    Titulo: string,
    Descricao: string,
    Status?: number;
    onPress(): void;
}