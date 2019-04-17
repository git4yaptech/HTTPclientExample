import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  RegistrationForm = new FormGroup({
    password: new FormControl(),
    confirmPassword: new FormControl()
  })

  constructor() {
  }

  ngOnInit() {

  }

  onSubmit() {
  }

  identityRevealedValidator() {

  }
}

