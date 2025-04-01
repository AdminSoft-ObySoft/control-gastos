import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarRutasComponent } from './lugar-rutas.component';

describe('LugarRutasComponent', () => {
  let component: LugarRutasComponent;
  let fixture: ComponentFixture<LugarRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LugarRutasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
