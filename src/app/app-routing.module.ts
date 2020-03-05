import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './youtube/components/details/details.component';
import { Error404Component } from './core/components/error404/error404.component';

const routes: Routes = [
  {path: 'login',
  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: 'main',
  loadChildren: () => import('./youtube/youtube.module')
  .then((m) => m.YoutubeModule)},
  // {path: ':id', component: DetailsComponent},
  // {path: '', redirectTo: '/main', pathMatch: 'full'},
  // {path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
