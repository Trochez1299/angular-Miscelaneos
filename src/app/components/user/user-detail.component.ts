import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: ` <p>user-detail works!</p> `,
  styles: [],
})
export class UserDetailComponent implements OnInit {
  constructor(private Router: ActivatedRoute) {
    this.Router.parent?.params.subscribe((params) => {
      console.log('Estoy en una ruta hija');
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
