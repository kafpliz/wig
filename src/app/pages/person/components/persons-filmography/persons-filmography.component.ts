import { CUSTOM_ELEMENTS_SCHEMA, Component, input } from '@angular/core';
/* import { ISearchCard } from '../../../../data/interfaces/search-card.interface'; */
import { CommonModule } from '@angular/common';
import { SeacrhCardComponent } from '../../../main/components/search/components/seacrh-card/seacrh-card.component';
import { RouterLink } from '@angular/router';
import { IPersons } from '../../../../data/interfaces/person.interface';
import { SearchCardTypePipe } from '../../../../core/pipes/search-card-type.pipe';
import { RoundToNearestPipe } from '../../../../core/pipes/round-to-nearest.pipe';
import { StringEndsPipe } from '../../../../core/pipes/string-ends.pipe';

@Component({
  selector: 'app-persons-filmography',
  standalone: true,
  imports: [CommonModule, RouterLink,SearchCardTypePipe, RoundToNearestPipe, StringEndsPipe],
  templateUrl: './persons-filmography.component.html',
  styleUrl: './persons-filmography.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PersonsFilmographyComponent {
  tabs:string = ''
  content!:/* ISearchCard[] */any
  getData = input<IPersons>()
  data!:any
  ngOnInit(){
    this.data = this.getData()
    this.content = this.data.data.person.films
    console.log('film', this.content);
    
 /*    this.data.actor ? this.tabs[0] = true : this.data.screenwriter ? this.tabs[1] = true : this.tabs[2] = true ;
    this.tabs[0] ? this.content = this.data.actor : this.tabs[1] ? this.content = this.data.screenwriter : this.content = this.data.producer */
  }

  changeTab(data:/* ISearchCard[] */any){
    this.tabs = data
    console.log(data);
    
    for (const item of this.data) {
      if(item.profession == data){
        this.content = item
      }
    }
   
  }
  checkRatingStyle(rating:number): string {
    return rating >= 8.5 ? 'linear-gradient(250deg, rgba(241,255,0,1) 0%, rgba(255,0,0,1) 0%, rgba(255,0,189,1) 100%)': rating >= 7 ? '#8FD14F' : rating <= 6 ? 'red' : '#FAC710'
  }
}
