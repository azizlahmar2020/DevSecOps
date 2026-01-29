import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackfrontComponent } from './backfront.component';

describe('BackfrontComponent', () => {
  let component: BackfrontComponent;
  let fixture: ComponentFixture<BackfrontComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackfrontComponent]
    });
    fixture = TestBed.createComponent(BackfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
