import { Component, OnInit } from '@angular/core';
import { SocioService } from './socio.service';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  constructor(private _socioService: SocioService) { }

  ngOnInit() {
  }

}
