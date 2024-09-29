import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-top-movie',
  standalone: true,
  imports: [],
  templateUrl: './top-movie.component.html',
  styleUrl: './top-movie.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopMovieComponent {

}
