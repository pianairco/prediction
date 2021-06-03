// import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PianaStorageService} from "../../services/piana-storage.service";
import {LoadingService} from "../../services/loading.service";
import {ConstantService} from "../../services/constant.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo: {
    username: '',
    password: '',
    captcha: ''
  }
  captchaCounter: number = 0;
  returnUrl: string;
  subDomain = null;

  constructor(
    // private authService: SocialAuthService,
    private pianaStorageService: PianaStorageService,
    private loadingService: LoadingService,
    private constantService: ConstantService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) {
    // this.route.queryParams.subscribe(params => {
    //   console.log("--------- param -----------")
    //   this.subDomain = params['sub-domain'];
    //   console.log("param change: ", this.subDomain)
    // });
  }

  ngOnInit(): void {
    console.log("on login component init", this.subDomain)
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.subDomain = this.route.snapshot.queryParams['sub-domain'];
    //   console.log("--------- param -----------")
    // console.log(this.subDomain, this.returnUrl)
    this.loginInfo = {
      username: '',
      password: '',
      captcha: ''
    }

    // axios.get('resources/captcha', { headers: { withCredentials: true } })
    //   .then(res => {
    //     console.log(res);
    //   }, err => {
    //     console.log(err);
    //   });
  }

  public getLinkPicture() {
    return 'resources/captcha' + '?' + this.captchaCounter;
  }

  login() {
    console.log(this.loginInfo)
    if(this.loginInfo.password == null || this.loginInfo.password.length < 6) {
      alert("رمز عبور باید بیشتر از 5 کاراکتر باشد");
      return;
    } else if(this.loginInfo.username == null || this.loginInfo.username.length < 11 ||
      !this.loginInfo.username.startsWith('0')) {
      alert("شماره موبایل با الگو مطابقت ندارد");
      return;
    } if(this.loginInfo.captcha == null || this.loginInfo.password.length < 5) {
      alert("کلمه امنیتی باید 5 کاراکتر باشد");
      return;
    }

    let promise = this.authenticationService.login(this.loginInfo);
    promise.then(appInfo => {
      if(appInfo === "close") {
        console.log("window force closed!")
        window.close()
      } else {
        console.log(appInfo);
        this.router.navigate([this.returnUrl]);
      }
    }, err => {
      console.log(err);
      this.captchaCounter++;
    });
  }

  async handleClickGoogleSignIn() {
    /*try {
      console.log("xxxxxxxxxx")
      this.loadingService.changeState(true);
      // this.$gAuth.getAuthCode().then((authCode) => {
      //   //on success
      //   this.isLoading = false;
      //   console.log("authCode", authCode);
      // })
      //   .catch((error) => {
      //     //on fail do something
      //     this.isLoading = false;
      //     console.log("error", error);
      //   });
      console.log("----------- handle --------------")
      console.log(this.subDomain)
      let appInfo = await this.authenticationService.googleSignIn(this.subDomain);
      console.log(appInfo)
      if(appInfo === "close") {
        console.log("window force closed!")
        window.close()
      } else {
        this.loadingService.changeState(false);
        this.router.navigate([this.returnUrl]);
      }
    } catch (error) {
      this.loadingService.changeState(false);
      console.log(error)
    } finally {
      this.loadingService.changeState(false);
    }*/
  }
}
