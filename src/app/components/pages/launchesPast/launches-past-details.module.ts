import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesPastDetailsRoutingModule } from './launches-past-details-routing.module';
import { LaunchesPastDetailsComponent } from './launches-past-details.component';

@NgModule({
  declarations: [
    LaunchesPastDetailsComponent
  ],
  imports: [
    CommonModule,
    LaunchesPastDetailsRoutingModule,
  ],
  exports: [
    LaunchesPastDetailsComponent
  ]
})
export class LaunchesPastDetailsModule { }
