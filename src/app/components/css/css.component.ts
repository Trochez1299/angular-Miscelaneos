import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
  p {
    color: red;
    font-size: 20px;
  }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
