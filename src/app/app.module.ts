import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SocioComponent } from './socio/socio.component';
import { SalvaEditarComponent } from './socio/salva-editar/salva-editar.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkspaceComponent } from './layout/workspace/workspace.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SalvaEditarEmpresaComponent } from './empresa/salva-editar-empresa/salva-editar-empresa.component';
import { ViculoComponent } from './viculo/viculo.component';
import { SocioService } from './socio/socio.service';

@NgModule({
  declarations: [
    AppComponent,
    SocioComponent,
    SalvaEditarComponent,
    EmpresaComponent,
    FooterComponent,
    LayoutComponent,
    WorkspaceComponent,
    NavigationComponent,
    SalvaEditarEmpresaComponent,
    ViculoComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [SocioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
