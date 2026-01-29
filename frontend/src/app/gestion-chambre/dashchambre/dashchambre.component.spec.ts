import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashchambreComponent } from './dashchambre.component';

describe('DashchambreComponent', () => {
  let component: DashchambreComponent;
  let fixture: ComponentFixture<DashchambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashchambreComponent]
    });
    fixture = TestBed.createComponent(DashchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
