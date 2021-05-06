import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaactoresComponent } from './altaactores.component';

describe('AltaactoresComponent', () => {
  let component: AltaactoresComponent;
  let fixture: ComponentFixture<AltaactoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaactoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaactoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
