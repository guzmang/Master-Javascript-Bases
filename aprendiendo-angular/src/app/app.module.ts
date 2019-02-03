import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routingModule, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routingModule,   // Toda la configuracion de las rutas
    HttpClientModule
  ],
  providers: [
    appRoutingProviders  // cargo el servicio que voy a querer utilizar en otros componentes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
