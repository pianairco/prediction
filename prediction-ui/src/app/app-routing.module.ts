import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guards/auth.guard";
import {TileComponent} from "./views/tile/tile.component";
import {HomeViewComponent} from "./views/home-view/home-view.component";
import {LoginComponent} from "./views/login/login.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";
import {PasswordSettingComponent} from "./views/password-setting/password-setting.component";
import {WeeklyMatchesComponent} from "./views/weekly-matches-view/weekly-matches-view.component";
import {WeeklyMatchesResultComponent} from "./views/weekly-matches-result-view/weekly-matches-result-view.component";
import {AdminGuard} from "./guards/admin.guard";
import {WeeklyMatchesPredictionComponent} from "./views/weekly-matches-prediction-view/weekly-matches-prediction-view.component";
import {MatchesRankingComponent} from "./views/matches-ranking-view/matches-ranking-view.component";
import {SigninComponent} from "./views/signin-view/signin.component";
import {WeeklyMatchesRankingComponent} from "./views/weekly-matches-ranking/weekly-matches-ranking.component";

const routes: Routes = [
  {
    path: '', canActivate:[AuthGuard], children: [
      { path: '', children: [
          { path: '', redirectTo: '/tile/home', pathMatch: 'full' },
          { path: 'tile', component: TileComponent, children:[
              { path: '', redirectTo: '/home', pathMatch: 'full' },
              { path: 'home', component: HomeViewComponent },
              { path: 'weekly-matches-score/:weeklyMatchesId', component: WeeklyMatchesRankingComponent },
              { path: 'weekly-matches-result/:weeklyMatchesId', component: WeeklyMatchesResultComponent },
              { path: 'weekly-matches-prediction/:weeklyMatchesId', component: WeeklyMatchesPredictionComponent },
              { path: 'weekly-matches-view/:weeklyMatchesId', component: WeeklyMatchesComponent },
              { path: 'weekly-matches/result/:weeklyMatchesId', component: WeeklyMatchesResultComponent, canActivate:[AdminGuard] },
              { path: 'matches-ranking/:weeklyMatchesId', component: MatchesRankingComponent },
              { path: 'password-setting', component: PasswordSettingComponent }
            ] },
        ]
      },
      { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
      // { path: 'signin', component: SigninComponent, canActivate:[AuthGuard] },
      { path: 'logout', component: LoginComponent, canActivate:[AuthGuard] },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
