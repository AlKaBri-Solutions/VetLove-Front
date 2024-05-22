import { Fecha } from "./Fecha";
import { Hora } from "./Hora";

export interface Reserva {
    id: number;
    hora: Hora;
    fecha: Fecha;
    disponible: boolean;
}