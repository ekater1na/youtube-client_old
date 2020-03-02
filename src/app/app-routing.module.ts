import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './core/pages/error/error.component';
import { AuthGuard } from './core/guards/auth.guard';
import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';

const routes: Routes = [
  {path: 'login',
  loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: 'main',
  loadChildren: () => import('./youtube/youtube.module')
  .then((m) => m.YoutubeModule), canActivate: [AuthGuard]},
  {path: ':id', component: DetailedInfoComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
