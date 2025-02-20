import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { IGenre } from '../../data/interfaces/genre.interface';
import { genre } from '../../data/data/genres.data';
import { CatalogCardComponent } from "./components/catalog-card/catalog-card.component";
import { CatalogService } from '../../core/services/catalog.service';
import { ISearch } from '../../data/interfaces/search-card.interface';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ErrorComponent } from "../error/error.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink, CatalogCardComponent,  ErrorComponent,RouterLinkActive],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  #route = inject(ActivatedRoute)
  genres: IGenre[] = genre;
  page: number = 1;
  #service = inject(CatalogService)
  cards!: ISearch
  activeGenre: string = ''
  isApi: boolean = true

  ngOnInit() {
    this.#route.queryParams.subscribe((param: any) => {
      this.activeGenre = param.genre ? param.genre : null
      console.log('comp',this.activeGenre);
      console.log('comp',param);
      
      this.#service.getGenre(param.genre).subscribe(data => {
     
        this.cards = data
      }, error => {
        if (error) {
          this.isApi = false
        }
      })


    })
    new ThemeService().getTheme()
  }








}
