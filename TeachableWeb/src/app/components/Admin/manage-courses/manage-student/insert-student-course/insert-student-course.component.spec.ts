import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStudentCourseComponent } from './insert-student-course.component';

describe('InsertStudentCourseComponent', () => {
  let component: InsertStudentCourseComponent;
  let fixture: ComponentFixture<InsertStudentCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertStudentCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertStudentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
