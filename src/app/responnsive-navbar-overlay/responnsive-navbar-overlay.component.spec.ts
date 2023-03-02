import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponnsiveNavbarOverlayComponent } from './responnsive-navbar-overlay.component';

describe('ResponnsiveNavbarOverlayComponent', () => {
  let component: ResponnsiveNavbarOverlayComponent;
  let fixture: ComponentFixture<ResponnsiveNavbarOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponnsiveNavbarOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponnsiveNavbarOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
