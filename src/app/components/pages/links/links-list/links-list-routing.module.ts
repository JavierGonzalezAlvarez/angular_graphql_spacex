import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksListComponent } from './links-list.component';

const routes: Routes = [{ path: '', component: LinksListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinksListRoutingModule { }
