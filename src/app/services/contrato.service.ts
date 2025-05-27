import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from '../models/Contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private apiUrl = 'http://localhost:8082/api/contratos'; 

  constructor(private http: HttpClient) {}

  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl);
  }

  getContratoById(id: number): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.apiUrl}/${id}`);
  }

  crearContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiUrl, contrato);
  }

  actualizarContrato(id: number, contrato: Contrato): Observable<Contrato> {
    return this.http.put<Contrato>(`${this.apiUrl}/${id}`, contrato);
  }

  eliminarContrato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}