import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-new',
  template: ` <p>user-new works!</p> `,
  styles: [],
})
export class UserNewComponent implements OnInit {
  constructor(private Router: ActivatedRoute) {
    this.Router.parent?.params.subscribe((params) => {
      console.log('Estoy en la ruta hija');
      console.log(params);
    });
  }

  ngOnInit(): void {}
}
