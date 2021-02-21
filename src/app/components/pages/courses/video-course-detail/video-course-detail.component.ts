import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-course-detail',
  templateUrl: './video-course-detail.component.html',
  styleUrls: ['./video-course-detail.component.css'],
})
export class VideoCourseDetailComponent implements OnInit {
  name = 'Angular 6';
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/c9F5kMUfFKk'
    );
  }

  ngOnInit(): void {}
}
