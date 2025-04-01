import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovDiariosListComponent } from './mov-diarios-list.component';

describe('MovDiariosListComponent', () => {
  let component: MovDiariosListComponent;
  let fixture: ComponentFixture<MovDiariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovDiariosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovDiariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
