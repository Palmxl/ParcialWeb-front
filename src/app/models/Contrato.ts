import { Entidad } from "./Entidad";

export interface Contrato {
  id?: number;
  identificador: string;
  valor: number;
  nombre_contratante: string;
  documento_contratante: string;
  nombre_contratista: string;
  documento_contratista: string;
  fecha_inicio: string;
  fecha_fin: string;
  entidad?: Entidad;
}