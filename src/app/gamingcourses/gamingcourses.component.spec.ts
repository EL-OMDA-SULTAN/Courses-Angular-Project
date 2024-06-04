import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingcoursesComponent } from './gamingcourses.component';

describe('GamingcoursesComponent', () => {
  let component: GamingcoursesComponent;
  let fixture: ComponentFixture<GamingcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamingcoursesComponent]
    });
    fixture = TestBed.createComponent(GamingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
