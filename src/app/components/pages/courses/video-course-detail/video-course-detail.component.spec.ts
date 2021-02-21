import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseDetailComponent } from './video-course-detail.component';

describe('VideoCourseDetailComponent', () => {
  let component: VideoCourseDetailComponent;
  let fixture: ComponentFixture<VideoCourseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCourseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
