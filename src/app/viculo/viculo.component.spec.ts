import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViculoComponent } from './viculo.component';

describe('ViculoComponent', () => {
  let component: ViculoComponent;
  let fixture: ComponentFixture<ViculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
