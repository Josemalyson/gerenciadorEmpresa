import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SocioComponent } from './socio/socio.component';
import { SalvaEditarComponent } from './socio/salva-editar/salva-editar.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { WorkspaceComponent } from './layout/workspace/workspace.component';
import { NavigationComponent } from './layout/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    SocioComponent,
    SalvaEditarComponent,
    EmpresaComponent,
    FooterComponent,
    LayoutComponent,
    WorkspaceComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
