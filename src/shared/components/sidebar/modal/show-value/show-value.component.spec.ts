import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowValueComponent } from './show-value.component';

describe('ShowValueComponent', () => {
  let component: ShowValueComponent;
  let fixture: ComponentFixture<ShowValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
