import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaEditarComponent } from './socio/salva-editar/salva-editar.component'
import { SocioComponent } from './socio/socio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { SalvaEditarEmpresaComponent } from './empresa/salva-editar-empresa/salva-editar-empresa.component';
import { ViculoComponent } from './viculo/viculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'index.html', pathMatch: 'full' },
  { path: 'socio/:id', component: SalvaEditarComponent },
  { path: 'socio', component: SocioComponent },
  { path: 'empresa/:id', component: SalvaEditarEmpresaComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'vinculo/:id', component: ViculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
