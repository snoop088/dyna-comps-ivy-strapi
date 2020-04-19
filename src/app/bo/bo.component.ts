import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dyn-bo',
  templateUrl: './bo.component.html',
  styleUrls: ['./bo.component.css']
})
export class BoComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  public logout() {
    this.auth.logout();
    // this.router.navigate(['/']);

  }

}
