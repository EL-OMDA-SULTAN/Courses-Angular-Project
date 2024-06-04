import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcoursesComponent } from './webcourses.component';

describe('WebcoursesComponent', () => {
  let component: WebcoursesComponent;
  let fixture: ComponentFixture<WebcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcoursesComponent]
    });
    fixture = TestBed.createComponent(WebcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
