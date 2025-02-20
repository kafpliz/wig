import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { PersonService } from '../../core/services/person.service';
import { IPersons, IPersonsBestMovie } from '../../data/interfaces/person.interface';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../core/pipes/round-to-nearest.pipe';
import { SeacrhCardComponent } from '../main/components/search/components/seacrh-card/seacrh-card.component';
/* import { ISearchCard } from '../../data/interfaces/search-card.interface'; */
import { PersonsFilmographyComponent } from "./components/persons-filmography/persons-filmography.component";
import { PersonsBestMovieComponent } from "./components/persons-best-movie/persons-best-movie.component";
import { MovieSkeletonComponent } from "../movie/components/movie-skeleton/movie-skeleton.component";


@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, PersonsFilmographyComponent, PersonsBestMovieComponent, MovieSkeletonComponent],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  #route = inject(ActivatedRoute)
  #themeService = inject(ThemeService)
  #service = inject(PersonService)
  person!:IPersons
  tabs:boolean[] = [false, false, false]
  bestMovie!:IPersonsBestMovie[]
  filmGr:any
  load = true
  ngOnInit(){
    this.#route.params.subscribe((param:any) => {
      console.log(param.id);
      this.#service.getPerson(param.id).subscribe(data=> {
        console.log('---');
        this.person = data;
        this.load = false
        
  /*       
        this.person.lifeTime.start = new Date(this.person.lifeTime.start).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }).replace(' г.', ' г');
        this.person.lifeTime.end = this.person.lifeTime.end ? new Date(this.person.lifeTime.end).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }).replace(' г.', ' г') : null
        this.person.lifeTime.end = this.person.lifeTime.end ? new Date(this.person.lifeTime.end).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }) : null
        this.bestMovie =this.person.bestMovie */
      })
    })
    this.#themeService.getTheme()
 
    
  }



}
