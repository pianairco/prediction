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
import {WeeklyMatchesRankingService, WeeklyMatchRankingModel} from "../../services/weekly-mathes-ranking.service";

@Component({
  selector: 'app-weekly-matches-ranking',
  templateUrl: './weekly-matches-ranking.component.html',
  styleUrls: ['./weekly-matches-ranking.component.css']
})
export class WeeklyMatchesRankingComponent implements OnInit {
  @Input() weeklyMatchesId: number;
  private subWeeklyMatchesId: any;
  public weeklyMatchRankingModels: WeeklyMatchRankingModel[] = [];
  public resMap: {} = {};

  disabled = true;

  constructor(
    private router: Router,
    public resizeService: ScreenSizeService,
    private route: ActivatedRoute,
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public competitionResultService: WeeklyMatchesCompetitionResultService,
    public weeklyMatchesRankingService: WeeklyMatchesRankingService) {
    console.log(this.weeklyMatchRankingModels);
    this.weeklyMatchesRankingService.weeklyMatchRankingModelsSubject.subscribe(res => {
      console.log(res);
      this.weeklyMatchRankingModels = JSON.parse(JSON.stringify(res));
    });
  }

  ngOnInit(): void {
    this.subWeeklyMatchesId = this.route.params.subscribe(params => {
      this.weeklyMatchesId = +params['weeklyMatchesId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.weeklyMatchesId)
      this.weeklyMatchesRankingService.fetch(this.weeklyMatchesId);
    });
  }

  return() {
    this.competitionResultService.reset();
    this.router.navigate(['/tile/home']);
  }

  isFirst(weeklyMatchRankingModel) {
    if(this.weeklyMatchRankingModels && this.weeklyMatchRankingModels[0]['MOBILE'] == weeklyMatchRankingModel['MOBILE'])
      return true;
  }
}
