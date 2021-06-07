import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication-service.service";
import {PianaStorageService} from "./piana-storage.service";

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(
    private pianaStorageService: PianaStorageService,
    private authenticationService: AuthenticationService) { }

  load(): Promise<any> {
    return this.authenticationService.getAppInfo();
    // return new Promise((resolve, reject) => {
    //   axios.post('api/app-info', {}, {headers: {}}).then(res => {
    //     if(res.status === 200) {
    //       let appInfo = res['data'];
    //       // console.log(appInfo);
    //       // console.log(JSON.stringify(appInfo));
    //       // console.log(localStorage.getItem('appInfo'));
    //
    //       this.pianaStorageService.putObject('appInfo', appInfo);
    //       // localStorage.setItem('currentUser', JSON.stringify(appInfo))
    //       // console.log(this.pianaStorageService.getObject('appInfo')['username'])
    //       // console.log(this.pianaStorageService.getFieldValue('appInfo', 'username'))
    //       // console.log(JSON.parse(localStorage.getItem('appInfo'))['username'])
    //
    //       resolve.apply(appInfo);
    //     } else {
    //       reject()
    //     }
    //   }, err => {
    //     reject(err);
    //   });
    // });
    // try {
    //   let res = await axios.post('api/app-info', {}, {headers: {}});
    // } catch (err) {
    //
    // }
  }
}
