import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { SocioService } from '../socio.service';

@Component({
  selector: 'app-salva-editar',
  templateUrl: './salva-editar.component.html',
  styleUrls: ['./salva-editar.component.css']
})
export class SalvaEditarComponent implements OnInit {

  constructor(
    private _socioService: SocioService,
    private formBuilder: FormBuilder) { }

  formularioSocio: FormGroup;

  ngOnInit() {
    this.formularioSocio = this.formBuilder.group({
      nome: [null, Validators.required],
      sobreNome: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formularioSocio);
    this._socioService.salvar(null);
  }

}
