import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PianaStorageService} from "./piana-storage.service";
import {RestClientService} from "./rest-client.service";

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  public _activationCode: boolean = false;
  public subject: any = new BehaviorSubject<any>(this._activationCode);

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService) {
    // this.fetch();
  }

  requestActivationCode(mobile) {
    this.restClientService.requestActivationCode(mobile).then(res => {
      console.log(res)
      console.log(res.data)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      if(res.data['code'] == 0)
        this.activationCode = true;
    }, err => {
      console.log(err);
    });
  }

  set activationCode(_activationCode) {
    this._activationCode = _activationCode;
    console.log(this._activationCode)
    this.subject.next(this._activationCode);
  }

  get activationCodeSubject(): Observable<boolean> {
    return this.subject.asObservable();
  }
};
