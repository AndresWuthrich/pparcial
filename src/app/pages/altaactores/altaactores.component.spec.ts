import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaActoresComponent } from './altaactores.component';

describe('AltaactoresComponent', () => {
  let component: AltaActoresComponent;
  let fixture: ComponentFixture<AltaActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
