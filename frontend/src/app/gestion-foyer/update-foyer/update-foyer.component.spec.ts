import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoyerComponent } from './update-foyer.component';

describe('UpdatfoyerComponent', () => {
  let component: UpdateFoyerComponent;
  let fixture: ComponentFixture<UpdateFoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFoyerComponent]
    });
    fixture = TestBed.createComponent(UpdateFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
