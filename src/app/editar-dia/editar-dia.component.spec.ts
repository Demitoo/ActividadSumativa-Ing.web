import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDiaComponent } from './editar-dia.component';

describe('EditarDiaComponent', () => {
  let component: EditarDiaComponent;
  let fixture: ComponentFixture<EditarDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
