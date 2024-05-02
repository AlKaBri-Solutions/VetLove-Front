import { Prioridad } from "./Prioridad";

export interface Enfermedad {
    idEnfermedad: number;
    nombre: string;
    prioridad: Prioridad
}