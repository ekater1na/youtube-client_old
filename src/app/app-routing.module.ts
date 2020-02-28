import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { DetailedInfoComponent } from './youtube/components/detailed-info/detailed-info.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { ErrorComponent } from './core/components/error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: SearchResultsComponent},
  {path: 'login', component: LoginComponent },
  {path: 'details', component: DetailedInfoComponent },
  {path: 'page404', component: ErrorComponent },
  {path: '**', redirectTo: '/page404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
