import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardsComponent } from './components/cards/cards.component';
import { Ciudades } from './services/ciudades.services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RedondearPipe } from './pipes/redondear.pipe';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    CardsComponent,
    RedondearPipe,
    ComponentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient, Ciudades],
  bootstrap: [AppComponent],
})
export class AppModule {}
