import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetialsComponent } from './coursedetials.component';

describe('CoursedetialsComponent', () => {
  let component: CoursedetialsComponent;
  let fixture: ComponentFixture<CoursedetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursedetialsComponent]
    });
    fixture = TestBed.createComponent(CoursedetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
