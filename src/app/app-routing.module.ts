import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';

import { FaqComponent } from './components/pages/faq/faq.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';

import { ContactusComponent } from './components/pages/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: Homepage2Component },
  { path: 'about-us', component: AboutusComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'service', component: Service2Component },
  { path: 'course', component: BlogGridComponent },
  { path: 'course/:id', component: BlogDetailComponent },
  { path: 'contact-us', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
