import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovDiariosAddComponent } from './mov-diarios-add.component';

describe('MovDiariosAddComponent', () => {
  let component: MovDiariosAddComponent;
  let fixture: ComponentFixture<MovDiariosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovDiariosAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovDiariosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
