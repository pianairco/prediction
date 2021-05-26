import {Component, OnInit} from '@angular/core';
import {RestClientService} from "../../services/rest-client.service";
import {SiteInfo} from "../new-site/new-site.component";
import {PianaStorageService} from "../../services/piana-storage.service";
import {SiteCategoryService} from "../../services/site-category.service";
import {WeeklyMatchesService} from "../../services/weekly-mathes.service";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(
    private pianaStorageService: PianaStorageService,
    private restClientService: RestClientService,
    public weeklyMatchesService: WeeklyMatchesService,
    private siteCategoryService: SiteCategoryService) {
  }

  ngOnInit(): void {
    this.weeklyMatchesService.fetch();
  }
}
