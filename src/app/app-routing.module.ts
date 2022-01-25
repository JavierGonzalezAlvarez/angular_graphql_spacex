import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'launchesPast', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'launchesPast', loadChildren: () => import('./components/pages/launchesPast/launches-past.module').then(m => m.LaunchesPastModule) },
  { path: 'links-list', loadChildren: () => import('./components/pages/links/links-list/links-list.module').then(m => m.LinksListModule) },
  { path: 'launchesPastDetails', loadChildren: () => import('./components/pages/launchesPast/launches-past-details.module').then(m => m.LaunchesPastDetailsModule) },
  { path: '**', loadChildren: () => import('./components/pages/notFound/not-found.module').then(m => m.NotFoundModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
