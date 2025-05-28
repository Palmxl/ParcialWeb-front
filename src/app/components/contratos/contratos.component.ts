import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../models/Contrato';
import { ContratoService } from '../../services/contrato.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-contratos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.cargarContratos();
  }

  cargarContratos(): void {
    this.contratoService.getContratos().subscribe(data => {
      this.contratos = data;
    });
  }
}
