import { Component, inject } from '@angular/core';
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
import { BackButtonComponent } from "../back-button/back-button.component";
import { MainService } from '../../core/services/main.service';
import { IMain } from '../../data/interfaces/main.interface';
import { ErrorComponent } from "../error/error.component";
import { IInnovation } from '../../data/interfaces/innovation.interface';
import { ITopMovie } from '../../data/interfaces/top-movie.interface';
import { IPopularMovie } from '../../data/interfaces/popular-movie.interface';
import { IWathHistory } from '../../data/interfaces/wath-history.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MSwiperComponent, InnovationComponent, GenresComponent, TopMovieComponent, SearchComponent, WatchHistoryComponent, RandomaizerComponent, CommonModule, RouterLink, BackButtonComponent, ErrorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isRandomaizerActive: boolean = false;
  #service = inject(MainService)
  mainData: IMain | null = null
  innovations: IInnovation[] = []
  top_movie: ITopMovie[] = []
  popular_movie:IPopularMovie[] = []
  history:IWathHistory[] = []
  isApi: boolean = true

  ngOnInit() {
    new ThemeService().getTheme()

    this.#service.checkPing().subscribe(data => {
      if (data != 200) {
        this.isApi = false
      }
    })

    if (this.isApi) {
      this.#service.getInnovations().subscribe(data => { this.innovations = data })
      this.#service.getTop().subscribe(data => { this.top_movie = data })
      this.#service.getPopular().subscribe(data => { this.popular_movie = data })
      this.#service.getHistory().subscribe(data => { this.history = data })
    }


  }

  changeState() {

    this.isRandomaizerActive = !this.isRandomaizerActive
  }

}
