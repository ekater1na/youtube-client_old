import {Injectable} from '@angular/core';
import {SearchResponse} from '../../youtube/models/search-response.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SearchItem} from '../../youtube/models/search-item.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {
  private readonly SEARCH_URL: string = 'search';

  private readonly VIDEOS_URL: string = 'videos';

  public searchResponse: SearchResponse;

  public videoDataList: SearchItem[];

  public searchWord: string;

  public isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public fetchData(): void {
    this.isLoading = true;

    this.videoDataList = [];

    this.http.get<SearchResponse>(this.SEARCH_URL, {
        params: new HttpParams({
          fromObject: {
            part: 'snippet',
            maxResults: '25',
            q: this.searchWord,
          }
        })
      }
    )
      .subscribe(
        (response) => {
        this.isLoading = false;

        this.searchResponse = response;

        response.items.forEach(videoItem => {
          if (typeof videoItem.id !== 'string') {
            this.http.get<SearchResponse>(this.VIDEOS_URL, {
                params: new HttpParams({
                  fromObject: {
                    part: 'snippet,contentDetails,statistics',
                    id: `${videoItem.id['videoId']}`,
                  }
                })
              }
            )
              .subscribe(
                (videoData) => {
                this.videoDataList.push(...videoData.items);
              },
                () => {
                  this.router.navigate(['/error']);
                }
              );
          }
        });
      },
        () => {
          this.router.navigate(['/error']);
          }
      );
  }

  public getVideoById(id: string): SearchItem {
    return this.videoDataList.find(video => video.id === id);
  }
}
