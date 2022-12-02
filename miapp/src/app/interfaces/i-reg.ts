import { IProdEnCarro } from "./iprod-en-carro"


export interface IReg {
    nombre: String
    apellido: String
    rut: String
    contrasenna: String
    id: String
    rol: String
    foto: String
    carro: Array<IProdEnCarro>
    favorito: Array<IProdEnCarro>

}


