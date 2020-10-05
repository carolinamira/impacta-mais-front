import { Postagem } from './Postagem';

export class Tema {
    public id: number;
    public descricao: string;
    public data_tema: Date;
    public ativo: boolean;
    public postagem: Postagem[];
}