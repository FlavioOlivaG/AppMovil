import { IDir } from "./idir";
import { IProdEnCarro } from "./iprod-en-carro";

export interface IBoleta {
    id: number;
    detalle: Array<IProdEnCarro>;
    idComprador: String;
    direccion: IDir

}
