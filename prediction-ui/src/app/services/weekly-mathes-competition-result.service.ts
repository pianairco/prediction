import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PianaStorageService} from "./piana-storage.service";
import {RestClientService} from "./rest-client.service";
import {AjaxCallService} from "./ajax-call.service";
import {WeeklyMatchCompetitionModel} from "./weekly-mathes-competition.service";

@Injectable({
  providedIn: 'root'
})
export class WeeklyMatchesCompetitionResultService {
  public _weeklyMatchCompetitionModel: WeeklyMatchCompetitionModel[] = [];
  public _competitionResultModels: CompetitionResultModel[] = [];
  public subject: any = new BehaviorSubject<any>(this._competitionResultModels);

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService) {
    // this.fetch();
  }

  sameEmit() {
    this.competitionResultModels = this._competitionResultModels;
  }

  reset() {
    this.competitionResultModels = [];
  }

  fetch(weeklyMatchesId: number) {
    this.restClientService.getCompetitionsResult(weeklyMatchesId).then(res => {
      // console.log(res)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      this.competitionResultModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  fetchCompetitions(weeklyMatchesId: number) {
    this.restClientService.getWeeklyMatchesCompetitionsForResult(weeklyMatchesId).then(res => {
      // console.log(res)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      this.competitionResultModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  register(competitionResultModel: CompetitionResultModel) {
    this.restClientService.registerCompetitionResult(competitionResultModel).then(res => {
      console.log(res, res.data)
      this.competitionResultModels = res.data;
    }, err => {

    });
  }

  registerAll(competitionResultModels: CompetitionResultModel[]) {
    this.restClientService.registerCompetitionResults(competitionResultModels);
  }

  set competitionResultModels(_competitionResultModels) {
    this._competitionResultModels = _competitionResultModels;
    console.log(this._competitionResultModels)
    this.subject.next(this._competitionResultModels);
  }

  get competitionResultModelsSubject(): Observable<CompetitionResultModel[]> {
    return this.subject.asObservable();
  }

  set weeklyMatchCompetitionModels(_weeklyMatchCompetitionModel) {
    this._weeklyMatchCompetitionModel = _weeklyMatchCompetitionModel;
    console.log(this._weeklyMatchCompetitionModel)
    this.subject.next(this._weeklyMatchCompetitionModel);
  }

  get weeklyMatchCompetitionModelsSubject(): Observable<WeeklyMatchCompetitionModel[]> {
    return this.subject.asObservable();
  }
};

export class CompetitionResultModel {
  weeklyMatchId: number;
  competitionId: number;
  hostGoals: number;
  guestGoals: number;
  registeringTime: number;

  constructor(weeklyMatchId,
              competitionId,
              hostGoals, guestGoals, registeringTime) {
    this.weeklyMatchId = weeklyMatchId;
    this.competitionId = competitionId;
    this.registeringTime = registeringTime;
    this.hostGoals = hostGoals;
    this.guestGoals = guestGoals;
  }
}

