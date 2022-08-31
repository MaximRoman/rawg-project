import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../../app.component";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  component: AppComponent;
  platformsShowAll: boolean = false;
  genresShowAll: boolean = false;
  anglePlatforms = faAngleDown;
  angleGenders = faAngleDown;
  angleDown = faAngleDown;
  angleUp = faAngleUp;
  constructor(appComponent: AppComponent) { 
    this.component = appComponent;
  }

  showAllPlatforms() {
    this.anglePlatforms === this.angleDown ? (this.platformsShowAll = true, this.anglePlatforms = this.angleUp) : (this.platformsShowAll = false, this.anglePlatforms = this.angleDown);
  }

  showAllGenders() {
    this.angleGenders === this.angleDown ? (this.genresShowAll = true, this.angleGenders = this.angleUp) : (this.genresShowAll = false, this.angleGenders = this.angleDown);
  }
  ngOnInit(): void {
  }

}
