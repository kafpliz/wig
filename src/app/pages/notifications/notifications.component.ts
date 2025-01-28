import { Component,input } from '@angular/core';
import { fadeInOut } from '../../anim/anim';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
  animations: [fadeInOut]
})
export class NotificationsComponent {
  message = input<string>("Успешно")
}
