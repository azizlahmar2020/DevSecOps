import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuniversiteComponent } from './detail-universite.component';

describe('DetailuniversiteComponent', () => {
  let component: DetailuniversiteComponent;
  let fixture: ComponentFixture<DetailuniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailuniversiteComponent]
    });
    fixture = TestBed.createComponent(DetailuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
