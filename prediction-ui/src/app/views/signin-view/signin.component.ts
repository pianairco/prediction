// import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PianaStorageService} from "../../services/piana-storage.service";
import {LoadingService} from "../../services/loading.service";
import {ConstantService} from "../../services/constant.service";
import {SigninService} from "../../services/signin.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinInfo: {
    mobile: '',
    activationCode: '',
    password: '',
    passwordRepeat: '',
    captcha: ''
  }

  customPatterns = new RegExp("^(0[1-9]|1[0-2])/\\d{4}$", "g");


  captchaCounter: number = 0;
  returnUrl: string;
  subDomain = null;

  constructor(
    // private authService: SocialAuthService,
    public signinService: SigninService,
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
    this.signinInfo = {
      mobile: '',
      activationCode: '',
      password: '',
      passwordRepeat: '',
      captcha: ''
    }

    /*this.signinService.activationCodeSubject.subscribe(res => {
    })*/

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

  requestActivationCode() {
    console.log(this.signinInfo.mobile, this.signinInfo.mobile.length)
    if(this.signinInfo.mobile != null || this.signinInfo.mobile.trim().length == 11)
      this.signinService.requestActivationCode(this.signinInfo.mobile.trim());
    else {
      alert("شماره موبایل درست وارد نشده");
    }
  }

  signin() {
    console.log(this.signinInfo)
    if(this.signinInfo.password == null || this.signinInfo.password.length < 6) {
      alert("رمز عبور باید بیشتر از 5 کاراکتر باشد");
      return;
    } else if(this.signinInfo.mobile == null || this.signinInfo.mobile.length < 11 ||
      !this.signinInfo.mobile.startsWith('0')) {
      alert("شماره موبایل با الگو مطابقت ندارد");
      return;
    } if(this.signinInfo.captcha == null || this.signinInfo.password.length < 5) {
      alert("کلمه امنیتی باید 5 کاراکتر باشد");
      return;
    }

    /*let promise = this.authenticationService.login(this.signinInfo);
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
    });*/
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
