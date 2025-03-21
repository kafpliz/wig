import { Component, inject, input } from '@angular/core';
import { DataSharedService } from '../../../../core/services/data-shared.service.service';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';
import { IMovieHeader } from '../../../../data/interfaces/movie.interface';
import { MovieService } from '../../../../core/services/movie.service';

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
  #service = inject(MovieService)

  ngOnInit() {
      this.header = this.data()! 
      console.log(this.header.isFav);
      this.isFavourite = this.header.isFav
  }

  copy() {
    navigator.clipboard.writeText(`${window.location.href}/`+ this.#service.tg.getUserId()).then(() => {
      this.#dataShared.changeMessage('Скопировано')
    })
  }

  addFavourites() {
    if(this.isFavourite){
     
      
      this.#service.delFavourite(this.header.id).subscribe(data=> {
        console.log('удалено');
        this.isFavourite= false
      })
    } else { console.log(this.header.id);
      this.#service.addFavourite(this.header.id).subscribe(data=> {
   
        this.#dataShared.changeMessage('Добавлено')
        this.isFavourite = true
      })
    }
   
   
  }

  checkRatingStyle(): string {
    return this.header.rating.kp >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': this.header.rating.kp >= 7 ? '#8FD14F' : this.header.rating.kp <= 6 ? 'red' : '#FAC710'
  }
}
