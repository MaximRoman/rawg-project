import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MainComponent } from '../main/main.component';
import { faAngleLeft, faAngleRight, faPlus, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  component: AppComponent;
  main: MainComponent;
  angleLeft = faAngleLeft;
  angleRight = faAngleRight;
  plus = faPlus;
  star = faStar;
  like = faThumbsUp;
  time = faClock;

  constructor(appComponent: AppComponent, mainComponent: MainComponent) {
    this.component = appComponent;
    this.main = mainComponent;
   }

  ngOnInit(): void {
  }
}
