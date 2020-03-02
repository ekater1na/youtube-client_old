import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: SearchResultsComponent},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)},
  {path: '', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule)},
  {path: 'page404', component: ErrorComponent },
  {path: '**', redirectTo: '/page404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
