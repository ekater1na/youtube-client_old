import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {path: 'main', component: SearchResultsComponent, canActivate: [AuthGuard]},
  {path: 'result/:id', component: DetailedInfoComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
