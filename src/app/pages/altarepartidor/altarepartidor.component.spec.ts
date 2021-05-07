import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltarepartidorComponent } from './altarepartidor.component';

describe('AltarepartidorComponent', () => {
  let component: AltarepartidorComponent;
  let fixture: ComponentFixture<AltarepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltarepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltarepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
