import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    public ngOnInit(): void {
      this.loginForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl(null, Validators.required)
      });
    }

    public submit(): void {
      this.authService.userLoggingStateStream.next(true);
      this.authService.userLoggingAuthStream.next(this.loginForm.value);

      this.router.navigate(['/main']);
    }
}
