import { CUSTOM_ELEMENTS_SCHEMA, Component, input } from '@angular/core';
import { ISearchCard } from '../../../../data/interfaces/search-card.interface';
import { CommonModule } from '@angular/common';
import { SeacrhCardComponent } from '../../../main/components/search/components/seacrh-card/seacrh-card.component';
import { RouterLink } from '@angular/router';
import { IPersons } from '../../../../data/interfaces/person.interface';

@Component({
  selector: 'app-persons-filmography',
  standalone: true,
  imports: [CommonModule, SeacrhCardComponent, RouterLink],
  templateUrl: './persons-filmography.component.html',
  styleUrl: './persons-filmography.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PersonsFilmographyComponent {
  tabs:boolean[] = new Array(8).fill(false)
  content!:ISearchCard[]
  getData = input<IPersons>()
  data!:IPersons
  ngOnInit(){
    this.data = this.getData()!
    this.data.actor ? this.tabs[0] = true : this.data.screenwriter ? this.tabs[1] = true : this.tabs[2] = true ;
    this.tabs[0] ? this.content = this.data.actor : this.tabs[1] ? this.content = this.data.screenwriter : this.content = this.data.producer
  }

  changeTab(data:ISearchCard[],index:number){
    this.tabs = new Array(8).fill(false)
    this.tabs[index] = true;
    this.content = data
  }
}
