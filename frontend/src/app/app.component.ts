import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECTO RUNT JUAN AGREDA';

  constructor(private router: Router) { }

  Listar() {
    this.router.navigate(["listar"]);
  }
}
