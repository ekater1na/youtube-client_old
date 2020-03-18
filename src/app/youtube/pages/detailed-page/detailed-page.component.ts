import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { ActivatedRoute, Params } from '@angular/router';
import { YoutubeDataService } from '@core/services/youtube-data.service';

@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss']
})
export class DetailedPageComponent implements OnInit {

  public videoData: SearchItem;

  constructor(
    private route: ActivatedRoute,
    private youtubeDataService: YoutubeDataService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.videoData = this.youtubeDataService.getVideoById(params.id);
    });
  }

}
