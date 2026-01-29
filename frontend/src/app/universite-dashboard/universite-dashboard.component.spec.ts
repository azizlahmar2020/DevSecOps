import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteDashboardComponent } from './universite-dashboard.component';

describe('UniversiteDashboardComponent', () => {
  let component: UniversiteDashboardComponent;
  let fixture: ComponentFixture<UniversiteDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniversiteDashboardComponent]
    });
    fixture = TestBed.createComponent(UniversiteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
