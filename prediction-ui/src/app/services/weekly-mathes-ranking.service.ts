import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PianaStorageService} from "./piana-storage.service";
import {RestClientService} from "./rest-client.service";
import {AjaxCallService} from "./ajax-call.service";

@Injectable({
  providedIn: 'root'
})
export class WeeklyMatchesRankingService {
  public _weeklyMatchRankingModels: WeeklyMatchRankingModel[] = [];
  public subject: any = new BehaviorSubject<any>(this._weeklyMatchRankingModels);

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService) {
    // this.fetch();
  }

  sameEmit() {
    this._weeklyMatchRankingModels = this._weeklyMatchRankingModels;
  }

  fetch(weeklyMatchesId: number) {
    this.restClientService.getWeeklyMatchesRanking(weeklyMatchesId).then(res => {
      // console.log(res)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      this.weeklyMatchRankingModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  set weeklyMatchRankingModels(_weeklyMatchRankingModels) {
    this._weeklyMatchRankingModels = _weeklyMatchRankingModels;
    console.log(this._weeklyMatchRankingModels)
    this.subject.next(this._weeklyMatchRankingModels);
  }

  get weeklyMatchRankingModelsSubject(): Observable<WeeklyMatchRankingModel[]> {
    return this.subject.asObservable();
  }
};

export class WeeklyMatchRankingModel {
  mobile: number;
  score: number;
};

