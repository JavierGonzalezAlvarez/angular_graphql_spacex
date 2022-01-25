import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesPastDetailsComponent } from './launches-past-details.component';

const routes: Routes = [{ path: '', component: LaunchesPastDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesPastDetailsRoutingModule { }
