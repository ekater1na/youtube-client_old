import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/models/user.model';
import { Subject } from 'rxjs';
import {debounceTime, filter} from 'rxjs/operators';
import { YoutubeDataService } from '@core/services/youtube-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isFilterCriteriaShown: boolean = false;

  public inputValue: string = '';

  public loginUser: User;

  public loginState: boolean;

  public searchWordStream: Subject<string> = new Subject<string>();

  constructor(
    private youtubeDataService: YoutubeDataService,
    public authService: AuthService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.authService.userLoggingStateStream
      .subscribe(state => {
        this.loginState = state;
      });

    this.authService.userLoggingAuthStream
      .subscribe(token => {
        this.loginUser = token;
      });

    this.searchWordStream
      .pipe(
        filter(word =>  word.length > 3),
        debounceTime(1000)
      )
      .subscribe(word => {
        this.youtubeDataService.searchWord = word;
        this.youtubeDataService.fetchData();
      });
  }

  public emitSearchWord(event: Event): void {
    this.searchWordStream.next((event.target as HTMLInputElement).value);
  }

  public logout(): void {
    this.inputValue = null;

    this.authService.userLoggingStateStream.next(false);

    this.authService.userLoggingAuthStream.next(
      {
        login: 'Name',
        password: 1111
      }
    );

    this.router.navigate(['/auth']);
  }
}
