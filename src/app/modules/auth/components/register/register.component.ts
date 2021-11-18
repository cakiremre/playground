import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { RegisterRequest } from '../../models/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;

  registerRequest: RegisterRequest = new RegisterRequest();

  constructor() {}

  ngOnInit(): void {}

  register(form: NgForm): void {
    console.log('data', this.registerRequest);
    if (form.valid) {
      console.log('valid form, submit');
    } else {
      console.log('invalid form');
    }
  }
}
