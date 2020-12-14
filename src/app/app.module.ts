import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionPersonaComponent } from './descripcion-persona/descripcion-persona.component';
import { HomeModule } from './home/home.module';
import { CuadradoComponent } from './cuadrado/cuadrado.component';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionPersonaComponent,
    CuadradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
