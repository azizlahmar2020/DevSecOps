import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduniversiteComponent } from './add-universite.component';

describe('AdduniversiteComponent', () => {
  let component: AdduniversiteComponent;
  let fixture: ComponentFixture<AdduniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdduniversiteComponent]
    });
    fixture = TestBed.createComponent(AdduniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
