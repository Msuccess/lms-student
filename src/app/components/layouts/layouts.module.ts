import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { Footer2Component } from './footer2/footer2.component';
import { Header2Component } from './header2/header2.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    PreloaderComponent,
    Header2Component,
    BlogSidebarComponent,
    Footer2Component,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    PreloaderComponent,
    Header2Component,
    BlogSidebarComponent,
    Footer2Component,
  ],
})
export class LayoutsModule {}
