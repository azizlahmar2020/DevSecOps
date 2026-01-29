import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletefoyerComponent } from './delete-foyer.component';

describe('DeletefoyerComponent', () => {
  let component: DeletefoyerComponent;
  let fixture: ComponentFixture<DeletefoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletefoyerComponent]
    });
    fixture = TestBed.createComponent(DeletefoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
