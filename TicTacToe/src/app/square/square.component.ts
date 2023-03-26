import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ rando }}
    </p> 
  `,
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  rando;

  constructor() {
    setInterval(() => this.rando = Math.random(), 500)
  }
}
