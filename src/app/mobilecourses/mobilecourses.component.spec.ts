import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecoursesComponent } from './mobilecourses.component';

describe('MobilecoursesComponent', () => {
  let component: MobilecoursesComponent;
  let fixture: ComponentFixture<MobilecoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobilecoursesComponent]
    });
    fixture = TestBed.createComponent(MobilecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
