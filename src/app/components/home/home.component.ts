import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  component: AppComponent

  constructor(appComponent: AppComponent) {
    this.component = appComponent;
   }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
