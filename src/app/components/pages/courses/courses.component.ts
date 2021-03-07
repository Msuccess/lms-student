import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PagesService } from '../service/pages.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses = new BehaviorSubject<any>({} as any);

  constructor(private pagesService: PagesService) {}

  getCourses(): void {
    this.pagesService.getCourseList().sbscribe(
      (res: any) => {
        this.courses.next(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
