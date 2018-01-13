import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaEditarComponent } from './socio/salva-editar/salva-editar.component'
import { SocioComponent } from './socio/socio.component';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'socio/:id', component: SalvaEditarComponent },
  { path: 'socio', component: SocioComponent },
  { path: 'empresa/:id', component: SalvaEditarComponent },
  { path: 'empresa', component: EmpresaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
