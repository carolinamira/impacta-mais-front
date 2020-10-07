import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
    public id: number;
    public titulo: string;
    public text_box: string;
    public data_post: Date;
    public cidade: string;
    public sangue: string;
    public nome_hospital: string;
    public imagem: string;
    public tema: Tema;
    public usuario: Usuario;
}