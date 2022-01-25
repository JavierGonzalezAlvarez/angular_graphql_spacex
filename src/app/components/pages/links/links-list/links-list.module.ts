import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksListRoutingModule } from './links-list-routing.module';
import { LinksListComponent } from './links-list.component';


@NgModule({
  declarations: [
    LinksListComponent
  ],
  imports: [
    CommonModule,
    LinksListRoutingModule
  ]
})
export class LinksListModule { }
