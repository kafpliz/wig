import { Component } from '@angular/core';
import { IGenre } from '../../../../data/interfaces/genre.interface';
import { genre } from '../../../../data/data/genres.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss'
})
export class GenresComponent {
  genres:IGenre[] = genre
}
