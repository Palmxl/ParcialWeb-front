import { Component } from '@angular/core';
import { MainComponent } from "./components/pages/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
