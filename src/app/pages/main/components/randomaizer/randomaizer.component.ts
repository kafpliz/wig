import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { IGenre } from '../../../../data/interfaces/genre.interface';
import { genre } from '../../../../data/data/genres.data';
import { RandomService } from '../../../../core/services/random.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-randomaizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './randomaizer.component.html',
  styleUrl: './randomaizer.component.scss'
})
export class RandomaizerComponent {
  animationActive: boolean = false
  public closeModal = output<boolean>()
  genres: IGenre[] = genre;
  genreActive: string | null = null;
  #service = inject(RandomService)
  #router = inject(Router)
  isShow: boolean = false

  addGenre(idx: string) {
    this.genreActive = idx
  }

  isActive(slug: string):boolean {
    if(slug == this.genreActive){
      return true
    } else {
      return false
    }

  }

  startAnimation() {
    this.animationActive = true

    setTimeout(() => {
      this.#service.getRandom(this.genreActive || '').subscribe(data => {
          this.#router.navigate(['/movie', data.id] )

      })
    }, 2000);
  }
  close() {
    this.closeModal.emit(false)
  }
}
