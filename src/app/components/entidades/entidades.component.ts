import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entidad } from '../../models/Entidad';
import { EntidadService } from '../../services/entidad.service';

@Component({
  selector: 'app-entidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.cargarEntidades();   
  }

  cargarEntidades(): void {
    this.entidadService.getEntidades().subscribe(data => {
      this.entidades = data;
    });
  }

  eliminarEntidad(id: number): void {
    this.entidadService.eliminarEntidad(id).subscribe(() => {
      this.cargarEntidades();
    });
  }
}