import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaEditarComponent } from './salva-editar.component';

describe('SalvaEditarComponent', () => {
  let component: SalvaEditarComponent;
  let fixture: ComponentFixture<SalvaEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvaEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
