import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversiteComponent } from './update-universite.component';

describe('UpdateuniversiteComponent', () => {
  let component: UpdateUniversiteComponent;
  let fixture: ComponentFixture<UpdateUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUniversiteComponent]
    });
    fixture = TestBed.createComponent(UpdateUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
