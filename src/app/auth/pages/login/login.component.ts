import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthService
  ) {
      this.authenticationService.currentUser.subscribe((x: User) => this.currentUser = x);
  }

  public ngOnInit(): void { }

  public logout(): void {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }
}
  // public onFormSubmit(data: User): void {
  //   this.authService.setAuthToken(data);
  //   this.router.navigate(['./main']);
  // }
