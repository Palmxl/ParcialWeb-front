import { Entidad } from "./Entidad";

export class Contrato {
    constructor(
    identificador: string,
    valor: number,
    nombre_contratante: string,
    documento_contratante: string,
    nombre_contratista: string,
    documento_contratista: string,
    fecha_inicio: string,
    fecha_fin: string,
    entidad?: Entidad,
    id?: number
    ) {}
}