import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SeacrhCardComponent } from "./components/seacrh-card/seacrh-card.component";
import { FormsModule } from '@angular/forms';
import { ISearch } from '../../../../data/interfaces/search-card.interface';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../../../core/services/search.service';
import { SearchPersonComponent } from "./components/search-person/search-person.component";
import { MovieSkeletonComponent } from '../../../movie/components/movie-skeleton/movie-skeleton.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SeacrhCardComponent, FormsModule, RouterLink, SearchPersonComponent, MovieSkeletonComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public data = ''
  public cards: any | null = null
  #service = inject(SearchService)
  
  ngOnInit() { }

  enterInput() {
    if (this.data.length >= 3) {
      console.log(this.data);
      this.#service.postData(this.data).subscribe(data=>{
       
        this.cards = data.data
        console.log(this.cards);
      })
    }
  }
}
