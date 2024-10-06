import { Component } from '@angular/core';
import { MSwiperComponent } from "./components/m-swiper/m-swiper.component";
import { InnovationComponent } from "./components/innovation/innovation.component";
import { GenresComponent } from "./components/genres/genres.component";
import { TopMovieComponent } from "./components/top-movie/top-movie.component";
import { SearchComponent } from "./components/search/search.component";
import { WatchHistoryComponent } from "./components/watch-history/watch-history.component";
import { RandomaizerComponent } from "./components/randomaizer/randomaizer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MSwiperComponent, InnovationComponent, GenresComponent, TopMovieComponent, SearchComponent, WatchHistoryComponent, RandomaizerComponent, CommonModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isRandomaizerActive:boolean = false;
  ngOnInit(){
    new ThemeService().getTheme()
  }

  changeState(){

    this.isRandomaizerActive = !this.isRandomaizerActive
  }
 
}
