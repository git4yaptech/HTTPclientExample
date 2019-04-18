import { Component } from '@angular/core';
import {AuthServiceService} from 'src/app/auth/auth-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthServiceService, private router: Router) {}
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
