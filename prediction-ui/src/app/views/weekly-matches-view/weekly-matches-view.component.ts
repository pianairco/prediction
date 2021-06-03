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
  selector: 'app-weekly-matches-view',
  templateUrl: './weekly-matches-view.component.html',
  styleUrls: ['./weekly-matches-view.component.css']
})
export class WeeklyMatchesComponent implements OnInit {
  @Input() weeklyMatchesId: number;
  private subWeeklyMatchesId: any;
  public weeklyMatchCompetitions: WeeklyMatchCompetitionModel[] = [];
  public competitionResults: CompetitionResultModel[] = [];
  public resMap: {} = {};

  disabled = true;

  constructor(
    private router: Router,
    public resizeService: ScreenSizeService,
    private route: ActivatedRoute,
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public competitionResultService: WeeklyMatchesCompetitionResultService,
    public weeklyMatchesCompetitionService: WeeklyMatchesCompetitionService,
    private siteCategoryService: SiteCategoryService) {
    console.log(this.weeklyMatchCompetitions);
    console.log(this.competitionResults);
    this.competitionResultService.competitionResultModelsSubject.subscribe(res => {
      console.log(res);
      this.competitionResults = JSON.parse(JSON.stringify(res));
      this.competitionResults.forEach(cr => {
        this.resMap[cr.competitionId] = cr;
      })
    });

    this.weeklyMatchesCompetitionService.weeklyMatchCompetitionModelsSubject.subscribe(
      res => {
        console.log(res);
        this.weeklyMatchCompetitions = JSON.parse(JSON.stringify(res));
        // this.weeklyMatchCompetitions.forEach(c => {
        //   console.log(c.hostGoals + ' : ' + c.guestGoals)
        // })
      }, err => {

      }
    )
  }

  ngOnInit(): void {
    this.subWeeklyMatchesId = this.route.params.subscribe(params => {
      this.weeklyMatchesId = +params['weeklyMatchesId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.weeklyMatchesId)
      this.weeklyMatchesCompetitionService.fetch(this.weeklyMatchesId);
      this.competitionResultService.fetch(this.weeklyMatchesId);
    });
  }

  getResult(competitionModel: WeeklyMatchCompetitionModel): CompetitionResultModel {
    for(let competitionResult of this.competitionResults) {
      if(competitionResult.competitionId == competitionModel.competitionId)
        return competitionResult;
    }
    // console.log("err", this.competitionResults, competitionModel)
    return null;
  }

  register() {
    let predictingMatchesModel: PredictingMatchesModel[] = [];
    this.weeklyMatchCompetitions.forEach(c => {
      predictingMatchesModel.push(new PredictingMatchesModel(
        this.weeklyMatchesId, c.competitionId, c.predictionId, c.hostGoals, c.guestGoals));
    });
    this.weeklyMatchesCompetitionService.register(predictingMatchesModel)
  }

  reset() {
    console.log(this.weeklyMatchesCompetitionService.weeklyMatchCompetitionModels)
    this.weeklyMatchesCompetitionService.sameEmit();
  }

  return() {
    this.competitionResultService.reset();
    this.router.navigate(['/tile/home']);
  }
}
