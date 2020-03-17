import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { StateService } from './state.service';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class VideoService {

  // constructor(private http: HttpClient, private appState: StateService) {}

  // fetchVideos(query: string) {
  //   return this.http
  //     .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
  //         '&maxResults=50' +
  //         '&type=video' +
  //         '&key=AIzaSyByFRCrQm0bfHfHaaKX2YwghTaHXt_1b1c')
  //     .map(response => response.json())
  // }
}
