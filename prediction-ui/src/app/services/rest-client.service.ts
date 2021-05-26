import {Injectable, Injector} from '@angular/core';
import {ConstantService} from "./constant.service";
import {AjaxCallService} from "./ajax-call.service";
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  ajaxUrlMap = {
    site: 'api/modules/site',
    siteCategory: 'api/modules/site/category',
    weeklyMatches: 'api/modules/competition/weekly-matches'
  }

  remoteServer: string = "";

  constructor(private constantService: ConstantService,
              private ajaxCallService: AjaxCallService) { }

  getAllSites() {
    return this.ajaxCallService.read(this.ajaxUrlMap.site + '/all-sites');
  }

  getAllSitesByCategory(categoryId) {
    return this.ajaxCallService.read(this.ajaxUrlMap.site + '/by-category?category-id=' + categoryId);
  }

  getSiteCategories() {
    return this.ajaxCallService.read(this.ajaxUrlMap.siteCategory + '/root');
  }

  getOpenWeeklyMatches() {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/open');
  }

  getWeeklyMatchesCompetitions(weeklyMatchesId: number) {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/competitions?weeklyMatchesId=' + weeklyMatchesId);
  }
}
