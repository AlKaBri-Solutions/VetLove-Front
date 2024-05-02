import { Enfermedad } from "./Enfermedad";

export interface TratamientoRequest {
    cedula: string;
    nombre: string;
    duracion: number;
    enfermedad: Enfermedad;
}