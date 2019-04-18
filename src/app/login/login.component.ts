import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from 'src/app/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.model.name = 'test@gmail.com';
    this.model.password = 'test@123';
  }
  onSubmit() {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '';
          this.router.navigateByUrl(redirect);
        }
      });
  }
}
