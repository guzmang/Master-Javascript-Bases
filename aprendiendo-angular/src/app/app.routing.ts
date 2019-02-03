// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/home/home.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'zapatillas', component: ZapatillasComponent},
	{path: 'videojuego', component: VideojuegoComponent},
	{path: 'cursos', component: CursosComponent},
	{path: 'cursos/:nombre/:followers', component: CursosComponent},
	{path: 'externo', component: ExternoComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: '**', component: HomeComponent}					// pagina 404, siempre debe ir al final
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];	// exportamos el servicio de rutas del router
export const routingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);