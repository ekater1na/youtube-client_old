import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {path: '', component: SearchResultsComponent,
    children: [{ path: '', component: DetailsComponent }] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
