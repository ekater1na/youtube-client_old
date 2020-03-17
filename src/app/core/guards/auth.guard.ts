import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {
  public state: boolean = false;

  constructor(
    private loginService: AuthService,
    private router: Router
  ) {}

  public canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.userLoggingStateStream
      .subscribe(flag => {
        this.state = flag;
      });

    if (!this.state) {
      this.router.navigate(['/login']);
    }

    return this.state;
  }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.loginService.userLoggingStateStream
      .subscribe(flag => {
        this.state = flag;
      });

    if (!this.state) {
      this.router.navigate(['/login']);
    }

    return this.state;
  }
}
