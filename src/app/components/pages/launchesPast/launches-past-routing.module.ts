import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesPastComponent } from './launches-past.component';

const routes: Routes = [{ path: '', component: LaunchesPastComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesPastRoutingModule { }
