import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotRequest } from '../../models/forgot-request';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
})
export class ForgotComponent implements OnInit {
  forgotForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
  });

  forgotRequest: ForgotRequest;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toLogin(): void {
    this.router.navigateByUrl('/auth/login');
  }

  forgot() {
    if (this.forgotForm.valid) {
      console.log('Valid form, submit', this.forgotForm.value);
      this.forgotRequest = this.forgotForm.value;
      console.log('Request: ', this.forgotRequest);
    } else {
      console.log('Invalid form');
    }
  }
}
