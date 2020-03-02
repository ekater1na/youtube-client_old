import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/auth/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) {}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    public isLoggedIn(): boolean {
        let status:  boolean;
        status = false;
        if (localStorage.getItem('user') === 'loggedin') {
            status = true;
        } else {
            status = false;
        }
        return status;
    }
}
