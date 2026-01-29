import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashuniversiteComponent } from './dashuniversite.component';

describe('DashuniversiteComponent', () => {
  let component: DashuniversiteComponent;
  let fixture: ComponentFixture<DashuniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashuniversiteComponent]
    });
    fixture = TestBed.createComponent(DashuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
