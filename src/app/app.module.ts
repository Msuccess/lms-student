import { LayoutsModule } from './components/layouts/layouts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage2Component,
    AboutusComponent,
    FaqComponent,
    Service2Component,
    BlogGridComponent,
    BlogDetailComponent,
    ContactusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LayoutsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
