import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PianaStorageService} from "./piana-storage.service";
import {RestClientService} from "./rest-client.service";

@Injectable({
  providedIn: 'root'
})
export class WeeklyMatchesService {
  public _weeklyMatchModels: WeeklyMatchModel[] = [];
  public subject: any = new BehaviorSubject<any>(this._weeklyMatchModels);

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService) {
    // this.fetch();
  }

  fetch() {
    this.restClientService.getOpenWeeklyMatches().then(res => {
      console.log(res)
      console.log(res.data)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      this.weeklyMatchModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  set weeklyMatchModels(_weeklyMatchModels) {
    this._weeklyMatchModels = _weeklyMatchModels;
    console.log(this._weeklyMatchModels)
    this.subject.next(this._weeklyMatchModels);
  }

  get weeklyMatchModelsSubject(): Observable<WeeklyMatchModel[]> {
    return this.subject.asObservable();
  }
};

export class WeeklyMatchModel {
  id: number;
  leagueName: string;
  leagueLogo: string;
  seasonTag: string;
  weekNumber: number;
  startDate: string;
  endDate: string;
};
