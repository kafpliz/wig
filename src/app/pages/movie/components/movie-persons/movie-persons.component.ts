import {  Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPersons, IPersonsShort } from '../../../../data/interfaces/person.interface';
import { CommonModule } from '@angular/common';
import { StringEndsPipe } from '../../../../core/pipes/string-ends.pipe';

@Component({
  selector: 'app-movie-persons',
  standalone: true,
  imports: [RouterLink,CommonModule, StringEndsPipe],
  templateUrl: './movie-persons.component.html',
  styleUrl: './movie-persons.component.scss',
  
})
export class MoviePersonsComponent {
  persons = input<IPersonsShort[] | null>(null)
  
  ngOnInit(){

  }
}
