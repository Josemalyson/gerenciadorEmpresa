import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


import { SocioService } from '../socio.service';
import { Socio } from '../../socio/socio';


@Component({
  selector: 'app-salva-editar',
  templateUrl: './salva-editar.component.html',
  styleUrls: ['./salva-editar.component.css']
})
export class SalvaEditarComponent implements OnInit {

  constructor(
    private _socioService: SocioService,
    private formBuilder: FormBuilder) { }

  public socio: Socio;
  formularioSocio: FormGroup;

  ngOnInit() {
    this.socio = new Socio();
    this.formularioSocio = this.formBuilder.group({
      nome: [null, Validators.required],
      sobreNome: [null, Validators.required, Validators.email],
      cpf: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  salvarSocio() {
    this._socioService.salvar(this.socio);
  }

}
