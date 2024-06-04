import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AicoursesComponent } from './aicourses.component';

describe('AicoursesComponent', () => {
  let component: AicoursesComponent;
  let fixture: ComponentFixture<AicoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AicoursesComponent]
    });
    fixture = TestBed.createComponent(AicoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
