import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './youtube/components/details/details.component';
import { Error404Component } from './core/pages/error404/error404.component';

const itemRoutes: Routes = [
  {path: 'details', component: DetailsComponent}
];

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'login',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'main',
  loadChildren: () => import('./youtube/youtube.module')
  .then((m) => m.YoutubeModule)},
  // {path: ':id', component: DetailsComponent, children: itemRoutes},
  {path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
