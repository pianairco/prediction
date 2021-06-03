import {Injectable, Injector} from '@angular/core';
import {ConstantService} from "./constant.service";
import {AjaxCallService} from "./ajax-call.service";
import {PredictingMatchesModel} from "./weekly-mathes-competition.service";
import {CompetitionResultModel} from "./weekly-mathes-competition-result.service";

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  ajaxUrlMap = {
    module: 'api/modules',
    site: 'api/modules/site',
    siteCategory: 'api/modules/site/category',
    weeklyMatches: 'api/modules/competition/weekly-matches'
  }

  remoteServer: string = "";

  constructor(private constantService: ConstantService,
              private ajaxCallService: AjaxCallService) { }

  requestActivationCode(mobile) {
    return this.ajaxCallService.post(this.ajaxUrlMap.module + '/auth/activation-code', {'mobile': mobile});
  }

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

  closeWeeklyMatches(weeklyMatchesId: number) {
    return this.ajaxCallService.update(this.ajaxUrlMap.weeklyMatches + '/weekly-matches-close',
      { "weekly-matches-id": weeklyMatchesId });
  }

  getWeeklyMatchesRanking(weeklyMatchesId: number) {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/weekly-matches-scores?weeklyMatchesId=' + weeklyMatchesId);
  }

  getWeeklyMatchesCompetitions(weeklyMatchesId: number) {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/competitions?weeklyMatchesId=' + weeklyMatchesId);
  }

  getWeeklyMatchesCompetitionsForResult(weeklyMatchesId: number) {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/competition-results?weeklyMatchesId=' + weeklyMatchesId);
  }

  getCompetitionsResult(weeklyMatchesId: number) {
    return this.ajaxCallService.read(this.ajaxUrlMap.weeklyMatches + '/results?weeklyMatchesId=' + weeklyMatchesId);
  }

  registerWeeklyMatchesPredictions(predictingMatchesModels: PredictingMatchesModel[]) {
    return this.ajaxCallService.save(
      this.ajaxUrlMap.weeklyMatches + '/predicting-matches', predictingMatchesModels);
  }

  registerCompetitionResult(competitionResultModel: CompetitionResultModel) {
    return this.ajaxCallService.save(
      this.ajaxUrlMap.weeklyMatches + '/matches-result', competitionResultModel);
  }

  registerCompetitionResults(competitionResultModels: CompetitionResultModel[]) {
    return this.ajaxCallService.save(
      this.ajaxUrlMap.weeklyMatches + '/matches-results', competitionResultModels);
  }
}
