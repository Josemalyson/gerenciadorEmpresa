import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { RootObject } from './root-object.model';
import { Socio } from '../socio';

import { SocioService } from '../socio.service';
import { error } from 'util';

@Component({
  selector: 'app-salva-editar',
  templateUrl: './salva-editar.component.html',
  styleUrls: ['./salva-editar.component.css']
})
export class SalvaEditarComponent implements OnInit {
  constructor(
    private _socioService: SocioService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  formularioSocio: FormGroup;
  exibeMsg: boolean;

  ngOnInit() {
    this.formularioSocio = this.criarFormulario();
    this.exibeMsg = false;
  }

  criarFormulario(): FormGroup {

    let id = this.route.snapshot.paramMap.get('id');

      if (id != null && !isNaN(Number.parseInt(id)) ) {

      this.formularioSocio = this.instanciarFormulario();

       this.formularioSocio.patchValue({

          id: 1,
          nome: 'AAAAAAAA',
          sobreNome: 'AAAAAAAAAA',
          cpf: '111111111',
          email: '11111111@EMAIL.COM'

        });
        return  this.formularioSocio;
      } else {
        return this.instanciarFormulario();
      }
  }


  private instanciarFormulario(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      sobreNome: [null, Validators.required],
      cpf: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  onSubmit() {

    if (this.formularioSocio.valid) {
      const socio = new Socio();
      socio.setCpf(this.formularioSocio.get('cpf').value);
      socio.setEmail(this.formularioSocio.get('email').value);
      socio.setNome(this.formularioSocio.get('nome').value);
      socio.setSobreNome(this.formularioSocio.get('sobreNome').value);
      this._socioService.salvar(socio)
      .subscribe(dados => {
      console.log(dados['data']);
      this.exibeMsg = true; }
      , (err: any) => alert(err.statusText));
    } else {
      alert('Campos Obrigatorios');

    }
  }

  resetar() {
    this.formularioSocio.reset();
    this.exibeMsg = false;
  }

  editar() {
    this._socioService.findByid(this.formularioSocio.get('id').value).subscribe(dados => {
  });

   }
}
