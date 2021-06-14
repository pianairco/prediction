import {Component, Input, OnInit} from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {PianaStorageService} from "../../services/piana-storage.service";
import {SiteCategoryService} from "../../services/site-category.service";
import {
  PredictingMatchesModel,
  WeeklyMatchCompetitionModel,
  WeeklyMatchesCompetitionService
} from "../../services/weekly-mathes-competition.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ScreenSizeService} from "../../services/screen-size.service";
import {
  CompetitionResultModel,
  WeeklyMatchesCompetitionResultService
} from "../../services/weekly-mathes-competition-result.service";

@Component({
  selector: 'app-weekly-matches-result-view',
  templateUrl: './weekly-matches-result-view.component.html',
  styleUrls: ['./weekly-matches-result-view.component.css']
})
export class WeeklyMatchesResultComponent implements OnInit {
  @Input() weeklyMatchesId: number;
  private subWeeklyMatchesId: any;
  public weeklyMatchCompetitions: WeeklyMatchCompetitionModel[] = [];
  public fixedWeeklyMatchCompetitions: WeeklyMatchCompetitionModel[] = [];
  public registeringTime = 0;

  constructor(
    private router: Router,
    public resizeService: ScreenSizeService,
    private route: ActivatedRoute,
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public competitionResultService: WeeklyMatchesCompetitionResultService,
    private siteCategoryService: SiteCategoryService) {
    competitionResultService.weeklyMatchCompetitionModelsSubject.subscribe(res => {
      this.weeklyMatchCompetitions = JSON.parse(JSON.stringify(res));
      this.fixedWeeklyMatchCompetitions = JSON.parse(JSON.stringify(res));
    });
    // competitionResultService.competitionResultModelsSubject.subscribe(
    //   res => {
    //     this.weeklyMatchCompetitions = JSON.parse(JSON.stringify(res));
    //     // this.weeklyMatchCompetitions.forEach(c => {
    //     //   console.log(c.hostGoals + ' : ' + c.guestGoals)
    //     // })
    //   }, err => {
    //
    //   }
    // )
  }

  ngOnInit(): void {
    this.subWeeklyMatchesId = this.route.params.subscribe(params => {
      this.weeklyMatchesId = +params['weeklyMatchesId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.weeklyMatchesId)
      this.competitionResultService.fetchCompetitions(this.weeklyMatchesId);
    });
  }
  checkIfStarted (competitionModel: WeeklyMatchCompetitionModel) {
    if(competitionModel.hostGoals == null && competitionModel.guestGoals == null)
      return false;
    else if(competitionModel.hostGoals >= 0 && competitionModel.guestGoals >= 0)
      return true;
    return false;
  }

  start(competitionModel: WeeklyMatchCompetitionModel) {
    this.competitionResultService.register(
      new CompetitionResultModel(
        this.weeklyMatchesId, competitionModel.competitionId,
        0, 0, 0));
  }

  register(competitionModel: WeeklyMatchCompetitionModel) {
    this.competitionResultService.register(
      new CompetitionResultModel(
        this.weeklyMatchesId, competitionModel.competitionId,
        competitionModel.hostGoals, competitionModel.guestGoals, competitionModel.registeringTime));
  }

  /*registerAll() {
    let competitionResultModels: CompetitionResultModel[] = [];
    this.weeklyMatchCompetitions.forEach(c => {
      competitionResultModels.push(new CompetitionResultModel(
        this.weeklyMatchesId, c.competitionId, c.hostGoals, c.guestGoals, this.registeringTime));
    });
    this.competitionResultService.registerAll(competitionResultModels)
  }*/

  reset() {
    this.competitionResultService.sameEmit();
  }

  return() {
    this.router.navigate(['/tile/home']);
  }

  checkForChange(model: WeeklyMatchCompetitionModel) {
    for(let fixed of this.fixedWeeklyMatchCompetitions) {
      if(fixed.competitionId == model.competitionId) {
        if(model.registeringTime > fixed.registeringTime /*||
          (model.registeringTime > fixed.registeringTime && model.hostGoals > fixed.hostGoals || model.guestGoals > fixed.guestGoals)*/)
          return true;
        return false;
      }
    }
    return false;
  }

  changeRegisteringTime(model: WeeklyMatchCompetitionModel, count: number) {
    model.registeringTime += count;
    this.checkRegisteringTime(model);
  }

  checkRegisteringTime(model: WeeklyMatchCompetitionModel) {
    for(let fixed of this.fixedWeeklyMatchCompetitions) {
      if(fixed.competitionId == model.competitionId) {
        if(model.registeringTime < fixed.registeringTime)
          model.registeringTime = fixed.registeringTime;
        break;
      }
    }
  }

  checkHostGoals(model: WeeklyMatchCompetitionModel) {
    for(let fixed of this.fixedWeeklyMatchCompetitions) {
      if(fixed.competitionId == model.competitionId) {
        if(model.hostGoals < fixed.hostGoals)
          model.hostGoals = fixed.hostGoals;
        break;
      }
    }
  }

  checkGuestGoals(model: WeeklyMatchCompetitionModel) {
    for(let fixed of this.fixedWeeklyMatchCompetitions) {
      if(fixed.competitionId == model.competitionId) {
        if(model.guestGoals < fixed.guestGoals)
          model.guestGoals = fixed.guestGoals;
        break;
      }
    }
  }
}
