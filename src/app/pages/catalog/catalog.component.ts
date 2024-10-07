import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IGenre } from '../../data/interfaces/genre.interface';
import { genre } from '../../data/data/genres.data';
import { CatalogCardComponent } from "./components/catalog-card/catalog-card.component";
import { CatalogService } from '../../core/services/catalog.service';
import { ISearchCard } from '../../data/interfaces/search-card.interface';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, CatalogCardComponent, BackButtonComponent, ErrorComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  #route = inject(ActivatedRoute)
  genres: IGenre[] = genre;
  page: number = 1;
  #service = inject(CatalogService)
  cards: ISearchCard[] = []
  activeGenre: string = ''
  isApi: boolean = true

  ngOnInit() {
    this.#route.queryParams.subscribe((param: any) => {
      this.activeGenre = param.genre
      console.log(param);

      console.log(this.activeGenre);
      this.#service.getGenre(param.genre, this.page).subscribe(data => {
        console.log(data);
        this.cards = data
      }, error => {
        if (error) {
          this.isApi = false
        }
      })


    })
    new ThemeService().getTheme()
  }

  changePage(side: boolean) {
    if (side == true) {

      this.#service.getGenre(this.activeGenre, ++this.page).subscribe(data => {
        console.log(data);

      })



    } else {
      if (this.page != 1) {
        this.#service.getGenre(this.activeGenre, --this.page).subscribe(data => {
          console.log(data);

        })
      }



    }
  }

}
