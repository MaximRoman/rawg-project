import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { GamesComponent } from './components/games/games.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GamePageComponent } from './components/game-page/game-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, title: 'R A W G'},
  {path: 'game/:slug', component: GamePageComponent, title: 'R A W G - Game'},
  {path: '**', component: NotFoundComponent, title: 'Not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GamesComponent,
    NotFoundComponent,
    GamePageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
