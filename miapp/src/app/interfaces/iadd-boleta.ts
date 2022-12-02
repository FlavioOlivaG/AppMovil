import { IDir } from "./idir";
import { IProdEnCarro } from "./iprod-en-carro";

export interface IaddBoleta {
    detalle: Array<IProdEnCarro>;
    idComprador: String;
    direccion: IDir



}
