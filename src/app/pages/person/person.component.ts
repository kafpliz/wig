import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { PersonService } from '../../core/services/person.service';
import { IPersons } from '../../data/interfaces/person.interface';
import { CommonModule } from '@angular/common';
import { RoundToNearestPipe } from '../../core/pipes/round-to-nearest.pipe';
import { SeacrhCardComponent } from '../main/components/search/components/seacrh-card/seacrh-card.component';
import { ISearchCard } from '../../data/interfaces/search-card.interface';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, RoundToNearestPipe, SeacrhCardComponent, RouterLink],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  #route = inject(ActivatedRoute)
  #themeService = inject(ThemeService)
  #service = inject(PersonService)
  person!:IPersons
  tabs:boolean[] = [false, false, false]
  content!:ISearchCard[]

  ngOnInit(){
    this.#route.params.subscribe((param:any) => {
      console.log(param.id);
      this.#service.getPerson(param.id).subscribe(data=> {
        console.log(data);
        this.person = data;
        this.person.lifeTime.start = new Date(this.person.lifeTime.start).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }).replace(' г.', ' г');
        this.person.lifeTime.end = this.person.lifeTime.end ? new Date(this.person.lifeTime.end).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }).replace(' г.', ' г') : null
        this.person.lifeTime.end = this.person.lifeTime.end ? new Date(this.person.lifeTime.end).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric' }) : null
        this.person.actor ? this.tabs[0] = true : this.person.screenwriter ? this.tabs[1] = true : this.tabs[2] = true 
        this.tabs[0] ? this.content = this.person.actor : this.tabs[1] ? this.content = this.person.screenwriter : this.content = this.person.producer
        
        
        
      })
    })
    this.#themeService.getTheme()
 
    
  }

  changeTab(index:number){
    this.tabs = new Array(3).fill(false)
    this.tabs[index] = true;
    this.tabs[0] ? this.content = this.person.actor : this.tabs[1] ? this.content = this.person.screenwriter : this.content = this.person.producer
  }

  checkRatingStyle(rating:number):string{
    return rating >= 7 ? '#8FD14F' : rating <= 6 ? '#DA0063' : '#FAC710'
  }
}
