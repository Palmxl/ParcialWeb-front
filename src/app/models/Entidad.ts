import { Contrato } from "./Contrato";

export interface Entidad {
  id?: number;
  nit: string;
  nombre: string;
  contratos?: Contrato[];
}