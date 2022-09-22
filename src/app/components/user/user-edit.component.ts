import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  template: ` <p>user-edit works!</p> `,
  styles: [],
})
export class UserEditComponent implements OnInit {
  constructor(private Router: ActivatedRoute) {
    this.Router.parent?.params.subscribe((params) => {
      console.log('Estoy en una ruta hija');
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
