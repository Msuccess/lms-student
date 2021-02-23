import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraClassRoutingModule } from './extra-class-routing.module';
import { ExtraClassComponent } from './extra-class.component';


@NgModule({
  declarations: [ExtraClassComponent],
  imports: [
    CommonModule,
    ExtraClassRoutingModule
  ]
})
export class ExtraClassModule { }
