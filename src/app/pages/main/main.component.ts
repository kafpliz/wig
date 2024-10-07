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

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MSwiperComponent, InnovationComponent, GenresComponent, TopMovieComponent, SearchComponent, WatchHistoryComponent, RandomaizerComponent, CommonModule, RouterLink, BackButtonComponent, ErrorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isRandomaizerActive:boolean = false;
  #service = inject(MainService)
  mainData:IMain | null = null
  isApi:boolean = true
  errorMes:string = ''
  ngOnInit(){
    new ThemeService().getTheme()
    this.#service.getData().subscribe(data=>{
      this.mainData = data
    }, error=> {
      if(error){
        console.log(error);
        this.errorMes = `${error.status} / ${error.message}`
        this.#service.sendError(error)
        this.isApi = false
      }
    })
  }

  changeState(){

    this.isRandomaizerActive = !this.isRandomaizerActive
  }
 
}
