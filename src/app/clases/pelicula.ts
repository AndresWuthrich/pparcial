import { Actor } from "./actor";

export class Pelicula {
    id?: number;
    nombre: string;
    tipo: string;
    fechaEstreno: Date;
    cantidadPublico: string;
    fotoPelicula?: string;
    actores?: Array<Actor>;
}
