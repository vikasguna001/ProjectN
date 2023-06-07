import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { CommonService } from '../common/commonService';
import { LoginService } from './login.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { AmazonLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormSubmitted = false;
  isLoginFailed = false;
  authenticationData: any = {};
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private loginService: LoginService,
    public commonService: CommonService,
    private authService: SocialAuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/Dior']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  signInWithAmazon(): void {
    this.authService.signIn(AmazonLoginProvider.PROVIDER_ID).then((result:any)=>{
      debugger;
      console.log(result);
    });
  }

  onSubmit() {
    this.commonService.showLoading();
    this.loginFormSubmitted = true;
    if (this.loginForm?.invalid) {
      this.commonService.hideLoading();
      return;
    }
    this.loginService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.commonService.hideLoading();
        localStorage.setItem('token', JSON.stringify(res.user.token));
        console.log(res.user.token);

        this.router.navigate(['/Dior']);
      },
      (err: any) => {
        this.commonService.hideLoading();
        this.commonService.toastErrorMsg(
          'Please correct email and pssoword.',
          'Error'
        );
      }
    );
  }
}
