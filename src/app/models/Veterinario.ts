import { Especialidad } from "./Especialidad";
import { EstadoVet } from "./EstadoVet";

export interface Veterinario {
    idVeterinario: number;
    cedula: string;
    nombre: string;
    contrasenia: string;
    fotoUrl: string;
    especialidad: Especialidad;
    estado: EstadoVet;
}