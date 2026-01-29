import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoyerComponent } from './add-foyer.component';

describe('AddfoyerComponent', () => {
  let component: AddfoyerComponent;
  let fixture: ComponentFixture<AddfoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfoyerComponent]
    });
    fixture = TestBed.createComponent(AddfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
