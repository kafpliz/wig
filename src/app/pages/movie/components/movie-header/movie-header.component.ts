import { Component, inject, input } from '@angular/core';
import { DataSharedService } from '../../../../core/services/data-shared.service.service';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';
import { IMovieHeader } from '../../../../data/interfaces/movie.interface';

@Component({
  selector: 'app-movie-header',
  standalone: true,
  imports: [CommonModule, RoundToNearestPipe],
  templateUrl: './movie-header.component.html',
  styleUrl: './movie-header.component.scss'
})
export class MovieHeaderComponent {
  #dataShared = inject(DataSharedService)
  isFavourite: boolean = false
  data = input<IMovieHeader | null>(null)
  header!: IMovieHeader;

  ngOnInit() {
      this.header = this.data()! 

  }
  copy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      this.#dataShared.changeMessage('Скопировано')
    })
  }

  addFavourites() {
    this.#dataShared.changeMessage('Добавлено')
    this.isFavourite = true
  }

  checkRatingStyle(): string {
    return this.header.rating >= 7 ? '#8FD14F' : this.header.rating <= 6 ? '#DA0063' : '#FAC710'
  }
}
