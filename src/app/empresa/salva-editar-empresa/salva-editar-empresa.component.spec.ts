import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaEditarEmpresaComponent } from './salva-editar-empresa.component';

describe('SalvaEditarEmpresaComponent', () => {
  let component: SalvaEditarEmpresaComponent;
  let fixture: ComponentFixture<SalvaEditarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvaEditarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvaEditarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
