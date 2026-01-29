import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBlocComponent } from './delete-bloc.component';

describe('DeleteBlocComponent', () => {
  let component: DeleteBlocComponent;
  let fixture: ComponentFixture<DeleteBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteBlocComponent]
    });
    fixture = TestBed.createComponent(DeleteBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
