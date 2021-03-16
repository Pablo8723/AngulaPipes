import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styles: [
  ]
})
export class OrdenadosComponent implements OnInit {

  enMayuscula: boolean= false;

  cambiaValor(){
    this.enMayuscula = !this.enMayuscula;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
