import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuniversiteComponent } from './delete-universite.component';

describe('DeleteuniversiteComponent', () => {
  let component: DeleteuniversiteComponent;
  let fixture: ComponentFixture<DeleteuniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteuniversiteComponent]
    });
    fixture = TestBed.createComponent(DeleteuniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
