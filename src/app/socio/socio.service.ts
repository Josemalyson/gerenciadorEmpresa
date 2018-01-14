import { RootObject } from './salva-editar/root-object.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Socio } from './socio';

@Injectable()
export class SocioService {

  constructor(private http: HttpClient) {}

  /**
   * salvar
   */
  public salvar(socio: Socio) {
    return this.http.post('https://httpbin.org/post', socio);
  }

  public findByid(id: number) {
   return this.http.get<RootObject>('https://viacep.com.br/ws/01001000/json/');
  }
}
