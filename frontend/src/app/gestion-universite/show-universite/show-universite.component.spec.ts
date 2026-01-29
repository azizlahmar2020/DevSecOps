import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuniversiteComponent } from './show-universite.component';

describe('ShowuniversiteComponent', () => {
  let component: ShowuniversiteComponent;
  let fixture: ComponentFixture<ShowuniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowuniversiteComponent]
    });
    fixture = TestBed.createComponent(ShowuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
