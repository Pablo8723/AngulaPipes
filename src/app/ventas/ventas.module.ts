import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MayusculasPipe } from './pipes/maysculas.pipe';



@NgModule({
declarations: [
  NumerosComponent, 
  NoComunesComponent, 
  BasicosComponent, 
  OrdenadosComponent,
  MayusculasPipe  
  ],
  exports: [
    NumerosComponent, NoComunesComponent, BasicosComponent, OrdenadosComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
