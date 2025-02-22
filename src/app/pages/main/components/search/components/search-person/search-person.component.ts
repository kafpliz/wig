import { Component,input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-person',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-person.component.html',
  styleUrl: './search-person.component.scss'
})
export class SearchPersonComponent {
  data = input<any>()


}
