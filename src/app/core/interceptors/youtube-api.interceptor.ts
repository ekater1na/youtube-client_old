import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeApiInterceptor implements HttpInterceptor {
  private readonly API_URL: string = 'https://www.googleapis.com/youtube/v3/';

  private readonly API_KEY: string = 'AIzaSyAxxBiCUtHJF8EIR-qQobXLZsloXwqhPno';

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newParams: HttpParams = new HttpParams({
      fromString: request.params.toString()
    });

    newParams = newParams.append('key', this.API_KEY);

    return next.handle(
      request.clone({
        url: `${this.API_URL}${request.url}`,
        params: newParams
      })
    );
  }
}
