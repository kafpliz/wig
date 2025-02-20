import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-movie-skeleton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './movie-skeleton.component.html',
  styleUrl: './movie-skeleton.component.scss'
})
export class MovieSkeletonComponent {

}
