import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Auth } from '../../data-models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public auth: Auth;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth = new Auth();
    this.loginFormGroup = new FormGroup({
      email: new FormControl(this.auth.email, [Validators.required, Validators.email]),
      password: new FormControl(this.auth.password, Validators.required)
    });
  }

  public login() {
    if (this.loginFormGroup.valid) {
      this.authService.signIn(this.auth).subscribe((response) => {
        this.authService.token = response.accessToken;
        this.router.navigateByUrl('admin/dashboard');
      });
    }
  }

  public getErrorMessage() {
    if (this.loginFormGroup.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.loginFormGroup.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

}
