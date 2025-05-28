import { Component } from '@angular/core';
import { EntidadesFormComponent } from "../../entidades-form/entidades-form.component";
import { ContratosComponent } from "../../contratos/contratos.component";
import { EntidadesComponent } from "../../entidades/entidades.component";
import { CommonModule } from '@angular/common';
import { ContratosFormComponent } from "../../contratos-form/contratos-form.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [EntidadesFormComponent, ContratosComponent, EntidadesComponent, CommonModule, ContratosFormComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}
