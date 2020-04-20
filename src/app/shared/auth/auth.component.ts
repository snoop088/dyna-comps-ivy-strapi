import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dyn-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public userData = { username: '', password: '' };
  public enter = 'enter';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  public login() {
    this.auth.login(this.userData).subscribe(() => this.router.navigate(['backoffice']));
  }
}
