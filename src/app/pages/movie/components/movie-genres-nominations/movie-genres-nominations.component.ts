import { Component, input } from '@angular/core';
import { INominationsCategories } from '../../../../data/interfaces/movie.interface';

@Component({
  selector: 'app-movie-genres-nominations',
  standalone: true,
  imports: [],
  templateUrl: './movie-genres-nominations.component.html',
  styleUrl: './movie-genres-nominations.component.scss'
})
export class MovieGenresNominationsComponent {
  getData = input<INominationsCategories>()
  data!:INominationsCategories
  ngOnInit(){
    this.data = this.getData()!  
  }
}
