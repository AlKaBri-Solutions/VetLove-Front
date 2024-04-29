import { Enfermedad } from "./Enfermedad";

export interface Medicamento {
    idMedicamento: number;
    nombre: string;
    costo: number;
    precio: number;
    unidades: number;
    vendidas: number;
    enfermedad: Enfermedad;
}