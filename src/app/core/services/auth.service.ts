import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../auth/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public userLoggingStateStream: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public userLoggingAuthStream: BehaviorSubject<User> = new BehaviorSubject<User>({
    login: 'Username',
    password: 1111
  });
}
