import { Mascota } from "./Mascota";
import { Medicamento } from "./Medicamento";

export interface Tratamiento {
    idTratamiento: number;
    fechaInicio: Date;
    fechaFin: Date;
    costo: number;
    medicamentoAplicado: boolean,
    mascota: Mascota,
    medicamento: Medicamento
}