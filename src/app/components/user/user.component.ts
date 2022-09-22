import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  constructor(private Router: ActivatedRoute) {
    this.Router.params.subscribe((params) => {
      console.log('Estoy en la ruta padre');
      console.log(params);
    });
  }
}
