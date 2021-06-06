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
import {WeeklyMatchesCompetitionPredictionService} from "../../services/weekly-mathes-competition-prediction.service";
import {LoginDialog} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-weekly-matches-prediction-view',
  templateUrl: './weekly-matches-prediction-view.component.html',
  styleUrls: ['./weekly-matches-prediction-view.component.css']
})
export class WeeklyMatchesPredictionComponent implements OnInit {
  @Input() weeklyMatchesId: number;
  private subWeeklyMatchesId: any;
  public weeklyMatchCompetitions: WeeklyMatchCompetitionModel[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public resizeService: ScreenSizeService,
    private route: ActivatedRoute,
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public weeklyMatchesCompetitionPredictionService: WeeklyMatchesCompetitionPredictionService,
    private siteCategoryService: SiteCategoryService) {
    weeklyMatchesCompetitionPredictionService.weeklyMatchCompetitionModelsSubject.subscribe(
      res => {
        this.weeklyMatchCompetitions = JSON.parse(JSON.stringify(res));
        // this.weeklyMatchCompetitions.forEach(c => {
        //   console.log(c.hostGoals + ' : ' + c.guestGoals)
        // })
      }, err => {

      }
    )
  }

  ngOnInit(): void {
    this.openDialog()
    this.subWeeklyMatchesId = this.route.params.subscribe(params => {
      this.weeklyMatchesId = +params['weeklyMatchesId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.weeklyMatchesId)
      this.weeklyMatchesCompetitionPredictionService.fetch(this.weeklyMatchesId);
    });
  }

  register() {
    let predictingMatchesModel: PredictingMatchesModel[] = [];
    this.weeklyMatchCompetitions.forEach(c => {
      predictingMatchesModel.push(new PredictingMatchesModel(
        this.weeklyMatchesId, c.competitionId, c.predictionId, c.hostGoals, c.guestGoals));
    });
    this.weeklyMatchesCompetitionPredictionService.register(predictingMatchesModel)
  }

  reset() {
    console.log(this.weeklyMatchesCompetitionPredictionService.weeklyMatchCompetitionModels)
    this.weeklyMatchesCompetitionPredictionService.sameEmit();
  }

  return() {
    this.router.navigate(['/tile/home']);
  }

  dialogOpened: boolean = false;

  openDialog() {
    this.dialogOpened = true;
    const dialogRef = this.dialog.open(PredictionDialog);

    dialogRef.afterClosed().subscribe(result => {
      this.dialogOpened = false;
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-prediction-dialog',
  templateUrl: 'prediction-dialog.component.html',
})
export class PredictionDialog {}
