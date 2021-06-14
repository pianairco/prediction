import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {PianaStorageService} from "./piana-storage.service";
import {RestClientService} from "./rest-client.service";
import {AjaxCallService} from "./ajax-call.service";

@Injectable({
  providedIn: 'root'
})
export class WeeklyMatchesCompetitionPredictionService {
  public _weeklyMatchCompetitionModel: WeeklyMatchCompetitionModel[] = [];
  public subject: any = new BehaviorSubject<any>(this._weeklyMatchCompetitionModel);

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService) {
    // this.fetch();
  }

  sameEmit() {
    this.weeklyMatchCompetitionModels = this._weeklyMatchCompetitionModel;
  }

  fetch(weeklyMatchesId: number) {
    this.restClientService.getWeeklyMatchesCompetitions(weeklyMatchesId).then(res => {
      // console.log(res)
      // this.pianaStorageService.putObject("rootCategory", res.data.data);
      this.weeklyMatchCompetitionModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  register(predictingMatchesModels: PredictingMatchesModel[]) {
    this.restClientService.registerWeeklyMatchesPredictions(predictingMatchesModels)
      .then(res => {
        // console.log(res)
        // this.pianaStorageService.putObject("rootCategory", res.data.data);
        this.weeklyMatchCompetitionModels = res.data;
    }, err => {
      console.log(err);
    });
  }

  registerPrediction(predictingMatchesModel: PredictingMatchesModel) {
    this.restClientService.registerWeeklyMatchesPrediction(predictingMatchesModel)
      .then(res => {
        console.log(res.data)
        console.log(this.weeklyMatchCompetitionModels)
        let index = -1;
        for(let i = 0; i < this._weeklyMatchCompetitionModel.length; i++) {
          if(this._weeklyMatchCompetitionModel[i].predictionId = res.data.predictionId) {
            index = i;
            break;
          }
        }
        console.log(index)
        // this._weeklyMatchCompetitionModel
        // this.pianaStorageService.putObject("rootCategory", res.data.data);
        // this.weeklyMatchCompetitionModels = res.data;
      }, err => {
        console.log(err);
      });
  }

  get weeklyMatchCompetitionModels() {
    return this._weeklyMatchCompetitionModel;
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

export class PredictingMatchesModel {
  weeklyMatchId: number;
  competitionId: number;
  predictionId: number;
  hostGoals: number;
  guestGoals: number;

  constructor(weeklyMatchId,
              competitionId,
              predictionId, hostGoals, guestGoals) {
    this.weeklyMatchId = weeklyMatchId;
    this.competitionId = competitionId;
    this.predictionId = predictionId;
    this.hostGoals = hostGoals;
    this.guestGoals = guestGoals;
  }
}

export class WeeklyMatchCompetitionModel {
  organizer: number;
  competitionId: number;
  predictionId: number;
  hostTeamId: number;
  hostTeamName: string;
  hostTeamLogo: string;
  guestTeamId: number;
  guestTeamName: string;
  guestTeamLogo: string;
  hostGoals: number;
  guestGoals: number;
  registeringTime: number;
  isLocked: boolean;
};

