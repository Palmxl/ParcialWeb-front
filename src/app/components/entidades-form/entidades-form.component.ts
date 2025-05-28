import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Entidad } from '../../models/Entidad';
import { EntidadService } from '../../services/entidad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entidades-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entidades-form.component.html',
  styleUrls: ['./entidades-form.component.css']
})
export class EntidadesFormComponent {

  entidad: Entidad = {
    nit: '',
    nombre: ''
  };

  mensaje: string = '';

  constructor(private entidadService: EntidadService) { }

  crearEntidad(): void {
     if (!this.entidad.nit || !this.entidad.nombre) {
      this.mensaje = 'Por favor completa todos los campos.';
      return;
    }

    this.entidadService.crearEntidad(this.entidad).subscribe({
      next: () => {
        this.mensaje = 'Entidad creada correctamente.';
        this.entidad = { nit: '', nombre: '' };
      },
      error: () => {
        this.mensaje = 'Error al crear la entidad.';
      }
    });
  }
}
