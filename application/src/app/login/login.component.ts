import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { login } from '../state/auth/auth.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  username: string = '';

  constructor(private store: Store<AppState>, private router: Router) {}

  login() {
    const username = 'anything';
    this.store.dispatch(login({ username: username }));
    this.store.select(state => state.auth.user).subscribe(
      user => {
        this.username = user?.username;
      }
    );
  }

  navigate() {
    this.router.navigate(['table']);
  }
}
