import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { BackButtonComponent } from "./pages/back-button/back-button.component";
import { NotificationsComponent } from "./pages/notifications/notifications.component";
import { DataSharedService } from './core/services/data-shared.service.service';
import { fadeInOut } from './anim/anim';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NotificationsComponent, BackButtonComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [fadeInOut]
})
export class AppComponent {
  title = 'WIG';
  #dataShared = inject(DataSharedService)
  message!:string
  isNotif:boolean = false
  isEnabled:boolean = true
  #router = inject(Router)

  ngOnInit(){
    console.log(this.#router.url);
    this.#router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event)=> {
      const navEndEvent = event as NavigationEnd;
      this.isEnabled = navEndEvent.urlAfterRedirects !== '/';
    })
    
    this.#dataShared.currentMessage.subscribe(data=> {
      if(data){
        this.message = data
      this.isNotif = true;
      setTimeout(() => {
          this.isNotif = false
      }, 3000);
      }
    
    })

    this.#router.events.subscribe(event=> {
      if(event instanceof NavigationEnd){  
         const urlWithoutQueryParams = event.urlAfterRedirects.split('?')
         if(!urlWithoutQueryParams[1]){
            window.scrollTo(0,0)
         }
       
      }
    })
  }
}
