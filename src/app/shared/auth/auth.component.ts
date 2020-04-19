import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'dyn-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public userData = { username: '', password: '' };
  public enter = 'enter';
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  public login() {
    this.auth.login(this.userData).subscribe();
  }
}
