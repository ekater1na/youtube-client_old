import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404PageComponent } from './core/pages/error404-page/error404-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'login',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: 'main',
  loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule)},
  {path: '**', component: Error404PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
