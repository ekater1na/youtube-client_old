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
  public show: boolean;

  constructor(
      private router: Router,
      private authService: AuthService
  ) {
      if (this.authService.login) {
        this.router.navigate(['./main']);
      }
  }

  public ngOnInit(): void { }

  public auth(data: User): void {
    // this.authService.setAuthToken(data);
  if (data.login !== '' && data.password !== '') {
    this.show = true;
    this.authService.login(data.login, data.password);
    this.router.navigate(['main']);
  } else {
    alert('Error');
  }
  }

  public logout(): void {
      this.authService.logout();
      this.router.navigate(['/login']);
  }
}
