import { Injectable } from '@angular/core';
import { Socio } from './socio';

@Injectable()
export class SocioService {

  constructor() { }

  /**
   * salvar
   */
  public salvar(socio: Socio) {
    console.log(socio);
  }
}
