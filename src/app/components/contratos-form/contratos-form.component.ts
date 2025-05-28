import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contrato } from '../../models/Contrato';
import { Entidad } from '../../models/Entidad';
import { ContratoService } from '../../services/contrato.service';
import { EntidadService } from '../../services/entidad.service';

@Component({
  selector: 'app-contratos-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contratos-form.component.html',
  styleUrls: ['./contratos-form.component.css']
})
export class ContratosFormComponent implements OnInit {
  contrato: Partial<Contrato> = {
    identificador: '',
    valor: 0,
    nombre_contratante: '',
    documento_contratante: '',
    nombre_contratista: '',
    documento_contratista: '',
    fecha_inicio: '',
    fecha_fin: '',
    entidad: undefined
  };

  entidades: Entidad[] = [];
  mensaje = '';

  constructor(
    private contratoService: ContratoService,
    private entidadService: EntidadService
  ) {}

  ngOnInit(): void {
    this.entidadService.getEntidades().subscribe(data => {
      this.entidades = data;
    });
  }

  crearContrato(): void {
    if (!this.contrato.entidad) {
      this.mensaje = 'Debes seleccionar una entidad';
      return;
    }

    this.contratoService.crearContrato(this.contrato as Contrato).subscribe({
      next: () => {
        this.mensaje = 'Contrato creado correctamente';
        this.contrato = {
          identificador: '',
          valor: 0,
          nombre_contratante: '',
          documento_contratante: '',
          nombre_contratista: '',
          documento_contratista: '',
          fecha_inicio: '',
          fecha_fin: '',
          entidad: undefined
        };
      },
      error: () => {
        this.mensaje = 'Error al crear contrato';
      }
    });
  }
}