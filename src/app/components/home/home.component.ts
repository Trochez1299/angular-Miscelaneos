import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
    <p [style.fontSize.px]="20"> Este es el ng style desde el html component </p>
    <hr>

    <app-css></app-css>
    <p>Hola soy una etiqueta p en el app.component</p>
    <hr>

    <app-clases></app-clases>
    <p appResaltado> Hola mundo </p>
    <hr>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
