import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'Giphy';

  constructor(
      private router: Router,
      public auth: AuthService
  ) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['login'])
  }

  login(){
    this.router.navigate(['login'])
  }
}
