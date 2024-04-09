import { Veterinario } from "./Veterinario";

export interface Cliente {
    id: number;
    cedula: string;
    nombre: string;
    correo: string;
    celular: string;
    veterinario: Veterinario;
}