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
  }
  onSubmit() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : './';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    });
  }
}
