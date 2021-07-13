import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewmenuComponent } from './reviewmenu.component';

describe('ReviewmenuComponent', () => {
  let component: ReviewmenuComponent;
  let fixture: ComponentFixture<ReviewmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
