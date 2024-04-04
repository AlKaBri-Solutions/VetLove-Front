import { EstadoMas } from "./EstadoMas";

export interface Mascota {
    id: number;
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    estado: EstadoMas;
    foto: string;
}