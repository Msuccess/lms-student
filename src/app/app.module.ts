import { LayoutsModule } from './components/layouts/layouts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CourseDetailComponent } from './components/pages/courses/course-detail/course-detail.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VideoCourseDetailComponent } from './components/pages/courses/video-course-detail/video-course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage2Component,
    AboutusComponent,
    FaqComponent,
    ContactusComponent,
    CoursesComponent,
    CourseDetailComponent,
    VideoCourseDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
