import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ChifoumiComponent } from './chifoumi/chifoumi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ChifoumiComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ChifoumiComponent, pathMatch: 'full' },
      { path: 'scoreboard', component: ScoreboardComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
