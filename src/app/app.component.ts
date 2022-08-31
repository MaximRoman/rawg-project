import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "./api.service";
import { faAndroid, faPlaystation, faWindows, faXbox, faNeos } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'rawg';
  games: any;
  screenshoots: any;
  genres: any;
  platforms = [
    {id: 0, name: 'PC', icon: faWindows},
    {id: 1, name: 'PlayStation', icon: faPlaystation},
    {id: 2, name: 'Xbox', icon: faXbox},
    {id: 3, name: 'Nintendo', icon: faNeos},
    {id: 4, name: 'iOS', icon: faMobileAlt},
    {id: 5, name: 'Android', icon: faAndroid},
  ]
  searchBtn = faMagnifyingGlass;
  searchInput:string;

  orderNotSelected: boolean = true;
  orderBy:string = "rating";
  asc: boolean = false;

  isMenuOpen = false;
  menuIcon = faBars;
  gameInfo: boolean = false;
  gameSelected: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuOpen ? this.menuIcon = faXmark : this.menuIcon = faBars;
  }

  getPlatformIcon(name:string) {
    return this.platforms.map(item => {
      if (name.includes(item.name)) {
        return item.icon;
      }
    })
  }

  constructor (private api: ApiService) {}

  ngOnInit(): void {
    if (localStorage.getItem('gamesGames') && localStorage.getItem('gamesGenres')) {
      this.games = JSON.parse(String(localStorage.getItem('gamesGames')));
      this.genres = JSON.parse(String(localStorage.getItem('gamesGenres')));
    } else {
      this.api.getApiValues('https://api.rawg.io/api/games?key=3a5cdd126e874721877a7c975c98405c&page_size=30').subscribe(response => {this.games = response;})
      this.api.getApiValues('https://api.rawg.io/api/genres?key=3a5cdd126e874721877a7c975c98405c').subscribe(response => {this.genres = response; })
    }
  }

  search() { 
    this.getAllGames();
    this.games.results = this.games.results.filter((item:any) => item.name.toLowerCase().includes(this.searchInput.toLowerCase()));
    this.searchInput = "";
    this.sortBy();
  }
  filterByPlatform(platform: string) {
    this.getAllGames();
    this.games.results = this.games.results.filter((item:any) => {
      if (item.parent_platforms.filter((pItem: any) => pItem.platform.name.toLowerCase() === platform.toLowerCase() ).length > 0) {
        return item;
      }
    });    
    this.sortBy();
  }
  filterByGenres(genre: string) {
    this.getAllGames();
    this.games.results = this.games.results.filter((item:any) => {
      if (item.genres.filter((pItem: any) => pItem.name.toLowerCase() === genre.toLowerCase() ).length > 0) {
        return item;
      }
    });    
    this.sortBy();
  }
  sortBy() {
    this.orderNotSelected = false;
    switch (this.orderBy) {
      case "rating":
        if (this.asc) {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return item.rating - prevItem.rating;
          })
        } else {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return prevItem.rating - item.rating;
          })
        }
        break;
      case "metacritic":
        if (this.asc) {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return item.metacritic - prevItem.metacritic;
          })
        } else {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return prevItem.metacritic - item.metacritic;
          })
        }        
        break;
      case "playtime":
        if (this.asc) {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return item.playtime - prevItem.playtime;
          })
        } else {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return prevItem.playtime - item.playtime;
          })
        }        
        break;
      case "suggestions_count":
        if (this.asc) {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return item.suggestions_count - prevItem.suggestions_count;
          })
        } else {
          this.games.results = this.games.results.sort((item: any, prevItem: any) => {
            return prevItem.suggestions_count - item.suggestions_count;
          })
        }        
        break;
    }
  }
  getAllGames() {
    if (localStorage.getItem('gamesGames') && localStorage.getItem('gamesGenres')) {
      this.games = JSON.parse(String(localStorage.getItem('gamesGames')));
      this.genres = JSON.parse(String(localStorage.getItem('gamesGenres')));
    } else {
      localStorage.setItem('gamesGames', JSON.stringify(this.games));
      localStorage.setItem('gamesGenres', JSON.stringify(this.genres));
    }
  }  
}
