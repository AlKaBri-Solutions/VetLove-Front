import { Especialidad } from "./Especialidad";

export interface Veterinario {
    idVeterinario: number;
    cedula: string;
    nombre: string;
    contrasenia: string;
    fotoUrl: string;
    especialidad: Especialidad
}