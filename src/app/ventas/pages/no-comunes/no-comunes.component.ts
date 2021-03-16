import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre1: string='Pablo';
  genero1: string='masculino';

  nombre2: string='Carolina';
  genero2: string='femenino';

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = [];
  clientes1: string[] = ['Pablo'];
  clientes2: string[] = ['Maria', 'Pedro'];
  clientes3: string[] = ['Pablo', 'Carolina', 'Josselyn', 'Santiago', 'Hector', 'Jaime', 'Gladys', 'Daniel'];

  clientesMapa={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre1='Carolina';
    this.genero1='femenino';
    this.nombre2='Pablo';
    this.genero2='masculino';
  }

  borrarCliente(){
    this.clientes3.pop();
  }

  // keyValue Pipe

  persona = {
    nombre: 'Pablo',
    edad: '34',
    direccion: 'Quito-Ecuador'
  }

  // JSON Pipe

  heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]


  // Async Pipe

  miObservable = interval(1000);//0,1,2,3,4,5

  valorPromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Fin de la promesa' );
    }, 3500);
  });

}
