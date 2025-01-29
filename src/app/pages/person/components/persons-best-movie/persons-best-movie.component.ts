import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';
import { IPersonsBestMovie } from '../../../../data/interfaces/person.interface';

@Component({
  selector: 'app-persons-best-movie',
  standalone: true,
  imports: [CommonModule, RoundToNearestPipe],
  templateUrl: './persons-best-movie.component.html',
  styleUrl: './persons-best-movie.component.scss'
})
export class PersonsBestMovieComponent {
  data = input<IPersonsBestMovie[]>()
  bestMovie!:IPersonsBestMovie[] 

  ngOnInit(){
    this.bestMovie =this.data()!
  }
  checkRatingStyle(rating:number):string{
    return rating >= 7 ? '#8FD14F' : rating <= 6 ? '#DA0063' : '#FAC710'
  }
}
