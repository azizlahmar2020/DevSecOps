import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfoyerComponent } from './dashfoyer.component';

describe('DashfoyerComponent', () => {
  let component: DashfoyerComponent;
  let fixture: ComponentFixture<DashfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashfoyerComponent]
    });
    fixture = TestBed.createComponent(DashfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
