import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraClassComponent } from './extra-class.component';

const routes: Routes = [{ path: '', component: ExtraClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraClassRoutingModule { }
