import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import {PianaStorageService} from "../services/piana-storage.service";
import {AuthenticationService} from "../services/authentication-service.service";
import axios from "axios";
import {ConstantService} from "../services/constant.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private pianaStorageService: PianaStorageService,
    private constantService: ConstantService,
    private router: Router,
    private route: ActivatedRoute) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(route)
    // console.log(route['routeConfig']['path'])
    // console.log(state['url'])
    // console.log(state['url'].startsWith('/login'))
    // console.log(localStorage.getItem('currentUser'))
    // console.log(((state['url'].startsWith('login') || state['url'].startsWith('/login')) && localStorage.getItem('currentUser') != null))
    // console.log(state)
    // console.log(route)
    // console.log(localStorage.getItem('currentUser'));
    let appInfo = this.authenticationService.appInfo;
    console.log(appInfo);
    // console.log("subdomain0", state['url']);
    // return false;
    if(state['url'].startsWith('login') || state['url'].startsWith('/login')) {
      if(appInfo === null || appInfo['isLoggedIn'] === false) {
        console.log("subdomain01", state['url']);
        // if((route['routeConfig']['path'].startsWith('login') || route['routeConfig']['path'].startsWith('/login')) && localStorage.getItem('currentUser')) {
        // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        return true;
      } else {
        this.router.navigate(['/tile/home']);
        return false;
      }
    } else if(state['url'].startsWith('signin') || state['url'].startsWith('/signin')) {
      if(appInfo === null || appInfo['isLoggedIn'] === false) {
        console.log("subdomain01", state['url']);
        // if((route['routeConfig']['path'].startsWith('login') || route['routeConfig']['path'].startsWith('/login')) && localStorage.getItem('currentUser')) {
        // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        return true;
      } else {
        this.router.navigate(['/tile/home']);
        return false;
      }
    } else if(state['url'].startsWith('logout') || state['url'].startsWith('/logout')) {
      console.log("gaurd => logout", this.authenticationService.appInfo)
      if(appInfo === null || appInfo['isLoggedIn'] === false) {
        console.log("appInfo", appInfo)
        // if((route['routeConfig']['path'].startsWith('login') || route['routeConfig']['path'].startsWith('/login')) && localStorage.getItem('currentUser')) {
        // this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        this.router.navigate(['/login']);
        return false;
      } else {
        try {
          this.authenticationService.logout();
          return true;
        } catch (err) {
          console.log('error')
          return false;
        }
      }
    } else {
      if (appInfo['isLoggedIn'] === true) {
        if (appInfo['isFormPassword'] === false) {
          if(state['url'].startsWith('tile/password-setting') || state['url'].startsWith('/tile/password-setting')) {
            return true;
          } else {
            this.router.navigate(['/tile/password-setting'], { queryParams: { returnUrl: state.url }});
            return false;
          }
        } else {
          // logged in so return true
          // console.log(localStorage.getItem('currentUser'))
          return true;
        }
      } else {
        // not logged in so redirect to login page with the return url
        // console.log(state.url)
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
      }
    }
  }

}
