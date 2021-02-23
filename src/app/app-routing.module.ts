import { VideoCourseDetailComponent } from './components/pages/courses/video-course-detail/video-course-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';

import { FaqComponent } from './components/pages/faq/faq.component';

import { ContactusComponent } from './components/pages/contactus/contactus.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CourseDetailComponent } from './components/pages/courses/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: Homepage2Component },
  { path: 'about-us', component: AboutusComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'course', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'course/video/:id', component: VideoCourseDetailComponent },
  { path: 'contact-us', component: ContactusComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'extra-class',
    loadChildren: () =>
      import('./extra-class/extra-class.module').then(
        (m) => m.ExtraClassModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
