import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PagesService } from '../../service/pages.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  courseId: string;
  courseDetails = new BehaviorSubject<any>({} as any);
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pagesService: PagesService
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      this.courseId = res.id;
    });
  }

  getCourseDetial(): void {
    this.pagesService.getById(this.courseId).subscribe((res: any) => {
      this.courseDetails.next(res);
    });
  }

  ngOnInit(): void {}
}
