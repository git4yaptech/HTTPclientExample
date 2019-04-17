import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  // RegistrationForm = this.fb.group({
  //    uname: new FormControl('', Validators.required)
  //  })

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }

}

