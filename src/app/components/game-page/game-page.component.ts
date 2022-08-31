import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { faAngleLeft, faAngleRight, faPlus, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  component: any;
  gameSlug: any;
  game: any;
  angleLeft = faAngleLeft;
  angleRight = faAngleRight;
  plus = faPlus;
  star = faStar;
  like = faThumbsUp;
  time = faClock;

  constructor(appComponent: AppComponent, private activatedRoute: ActivatedRoute ) { 
    this.component = appComponent;
    this.gameSlug = this.activatedRoute.snapshot.paramMap.get('slug');
  }

  ngOnInit(): void {
    this.game = this.component.games.results.filter((item:any) => item.slug === this.gameSlug);
  }

}
