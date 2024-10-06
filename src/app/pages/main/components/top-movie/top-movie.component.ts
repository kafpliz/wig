import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { ITopMovie } from '../../../../data/interfaces/top-movie.interface';
import { RouterLink } from '@angular/router';
import { TopMovieService } from '../../../../core/services/main/top-movie.service';

@Component({
  selector: 'app-top-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './top-movie.component.html',
  styleUrl: './top-movie.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopMovieComponent {
  #service = inject(TopMovieService)
  items:ITopMovie[] = []
  ngOnInit() {
    this.#service.getTopMovie().subscribe((data) => {
      this.items = data;
    })
  }
}
