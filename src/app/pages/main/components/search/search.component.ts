import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SeacrhCardComponent } from "./components/seacrh-card/seacrh-card.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SeacrhCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  ngOnInit() {

  }

}
