import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfoyerComponent } from './detail-foyer.component';

describe('DetailfoyerComponent', () => {
  let component: DetailfoyerComponent;
  let fixture: ComponentFixture<DetailfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailfoyerComponent]
    });
    fixture = TestBed.createComponent(DetailfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
