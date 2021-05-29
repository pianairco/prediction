import {Component, Input, OnInit} from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {PianaStorageService} from "../../services/piana-storage.service";
import {SiteCategoryService} from "../../services/site-category.service";
import {WeeklyMatchesCompetitionService} from "../../services/weekly-mathes-competition.service";
import {ActivatedRoute} from "@angular/router";
import {ScreenSizeService} from "../../services/screen-size.service";

@Component({
  selector: 'app-weekly-matches-view',
  templateUrl: './weekly-matches-view.component.html',
  styleUrls: ['./weekly-matches-view.component.css']
})
export class WeeklyMatchesComponent implements OnInit {
  @Input() weeklyMatchesId: number;
  private subWeeklyMatchesId: any;

  constructor(
    public resizeService: ScreenSizeService,
    private route: ActivatedRoute,
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public weeklyMatchesCompetitionService: WeeklyMatchesCompetitionService,
    private siteCategoryService: SiteCategoryService) {
  }

  ngOnInit(): void {
    this.subWeeklyMatchesId = this.route.params.subscribe(params => {
      this.weeklyMatchesId = +params['weeklyMatchesId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      console.log(this.weeklyMatchesId)
      this.weeklyMatchesCompetitionService.fetch(this.weeklyMatchesId);
    });
  }
}
