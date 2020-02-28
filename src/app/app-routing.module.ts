import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DetailedInfoComponent } from './detailed-info/detailed-info.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: SearchResultsComponent},
  {path: 'login', component: LoginComponent },
  {path: 'details', component: DetailedInfoComponent },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
