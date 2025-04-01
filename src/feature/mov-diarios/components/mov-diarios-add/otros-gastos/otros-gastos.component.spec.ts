import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosGastosComponent } from './otros-gastos.component';

describe('OtrosGastosComponent', () => {
  let component: OtrosGastosComponent;
  let fixture: ComponentFixture<OtrosGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtrosGastosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
