import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesPastRoutingModule } from './launches-past-routing.module';
import { LaunchesPastComponent } from './launches-past.component';

import { LaunchesPastDetailsModule } from './launches-past-details.module';

@NgModule({
  declarations: [
    LaunchesPastComponent
  ],
  imports: [
    CommonModule,
    LaunchesPastRoutingModule,
    LaunchesPastDetailsModule,
  ],
})
export class LaunchesPastModule { }
