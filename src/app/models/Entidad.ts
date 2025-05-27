import { Contrato } from "./Contrato";

export class Entidad {
    constructor(
        public nit: string = '',
        public nombre: string = '',
        public contratos?: Contrato[],
        public id?: number,
    ) {}
}