import { Component,input } from '@angular/core';

@Component({
  selector: 'app-search-person',
  standalone: true,
  imports: [],
  templateUrl: './search-person.component.html',
  styleUrl: './search-person.component.scss'
})
export class SearchPersonComponent {
  data = input<any>()


}
