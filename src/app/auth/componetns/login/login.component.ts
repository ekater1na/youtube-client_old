import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';
  public show: boolean;

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.loggedin) {
      this.router.navigate(['main']);
    }
  }

  public ngOnInit(): void {
  }

  public auth(): void {
    this.authService.login(this.login, this.password);
  }
}
