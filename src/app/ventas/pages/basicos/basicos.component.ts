import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'PABLURAS';
  nombreUpper: string = 'pabluras';
  nombreCompleto: string = 'pABlo roChA';
  fecha: Date = new Date();

}
