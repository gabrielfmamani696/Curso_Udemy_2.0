import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DirectivaComponent } from './components/directiva/directiva.component';

export const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'directivas', component: DirectivaComponent}
];
