import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { IGenre } from '../../../../data/interfaces/genre.interface';
import { genre } from '../../../../data/data/genres.data';
import { RandomService } from '../../../../core/services/random.service';

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
  genreArr: string[] = []
  #service = inject(RandomService)
  addGenre(slug: string) {
    const cad = this.genreArr.indexOf(slug)

    if (cad == -1) {
      this.genreArr.push(slug)
    } else {
      this.genreArr.splice(cad, 1)
    }

  }
  isActive(slug: string): boolean {
    const cad = this.genreArr.indexOf(slug)
    if (cad != -1) {
      return true
    } else {
      return false
    }

  }

  startAnimation() {
    this.animationActive = true

    setTimeout(() => {
      this.#service.getRandom(this.genreArr).subscribe(data => {
        console.log(data);

      })
    }, 2000);
  }
  close() {
    this.closeModal.emit(false)
  }
}
