import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-salva-editar-empresa',
  templateUrl: './salva-editar-empresa.component.html',
  styleUrls: ['./salva-editar-empresa.component.css']
})
export class SalvaEditarEmpresaComponent implements OnInit {

   constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
    ) { }

  formularioEmpresa: FormGroup;
  exibeMsg: boolean;

  ngOnInit() {
    this.formularioEmpresa = this.criarFormulario();
    this.exibeMsg = false;
  }

  criarFormulario(): FormGroup {

    let id = this.route.snapshot.paramMap.get('id');

      if (id != null && !isNaN(Number.parseInt(id)) ) {

      this.formularioEmpresa = this.instanciarFormulario();

       this.formularioEmpresa.patchValue({

          id: 1,
          nome: 'aaaaaa',
          razaoSocial: 'AAAAAAAA',
          cnpj: '1111111',
          email: '11111111@EMAIL.COM'

        });
        return  this.formularioEmpresa;
      } else {
        return this.instanciarFormulario();
      }
  }


  private instanciarFormulario(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      razaoSocial: [null, Validators.required],
      cnpj: [null, Validators.required],
      email: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.formularioEmpresa.valid) {
      alert('sucesso');
      this.exibeMsg = true;
    } else {
      alert('Campos Obrigatorios');
    }
  }

  resetar() {
    this.formularioEmpresa.reset();
    this.exibeMsg = false;
  }
}
