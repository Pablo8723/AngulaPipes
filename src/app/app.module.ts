import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// CAMBIAR EL LOCAL DE LA APP
import localEc from '@angular/common/locales/es-EC';
import localPr from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localEc );
registerLocaleData( localPr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-EC'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
