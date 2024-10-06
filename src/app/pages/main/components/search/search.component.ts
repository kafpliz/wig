import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SeacrhCardComponent } from "./components/seacrh-card/seacrh-card.component";
import { FormsModule } from '@angular/forms';
import { ISearchCard } from '../../../../data/interfaces/search-card.interface';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../../../core/services/main/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SeacrhCardComponent, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public data = ''
  public cards: ISearchCard[] = []
  #service = inject(SearchService)

  ngOnInit() { }

  enterInput() {
    if (this.data.length >= 3) {
      console.log(this.data);
      this.#service.postData(this.data).subscribe(data=>{
        console.log(data);
        this.cards = data
      })
    }
  }
}
