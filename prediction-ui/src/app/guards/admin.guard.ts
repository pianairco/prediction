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
export class AdminGuard implements CanActivate {
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
    // console.log(state)
    // console.log(route)
    // console.log(localStorage.getItem('currentUser'));
    if(this.authenticationService.appInfo['isAdmin']) {
        return true;
    } else {
      return false;
    }
  }

}
