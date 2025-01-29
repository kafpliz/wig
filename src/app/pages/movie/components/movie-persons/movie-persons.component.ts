import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPersons, IPersonsShort } from '../../../../data/interfaces/person.interface';

@Component({
  selector: 'app-movie-persons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-persons.component.html',
  styleUrl: './movie-persons.component.scss'
})
export class MoviePersonsComponent {
  persons = input<IPersonsShort[] | null>(null)
  
  ngOnInit(){

  }
}
