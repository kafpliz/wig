import { Component, inject } from '@angular/core';
import { PersonalAccountService } from '../../core/services/personal-account.service';
import { IPersonalAccount, IPromocode } from '../../data/interfaces/personal-accaount.interface';
import { unixToDate } from '../../shared/utils/utils';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";
import { ErrorComponent } from "../error/error.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, ErrorComponent, FormsModule],
  templateUrl: './personal-account.component.html',
  styleUrl: './personal-account.component.scss'
})
export class PersonalAccountComponent {
  #service = inject(PersonalAccountService)
  user: IPersonalAccount | null = null
  endDate: { message: string, isSub: boolean } | null = null
  themeService = inject(ThemeService)
  isApi: boolean = true
  isDarkTheme = false;
  promo = ''
  promInf:IPromocode | null = null
  
  ngOnInit() {
    this.#service.getData().subscribe(data => {
      console.log(data);
      this.user = data;
      this.endDate = unixToDate(data.endDate)
    }, error => {
      if (error) {
        this.#service.sendError(error)
        this.isApi = false
      }
    })

  }

  sendPomo(){
   this.#service.sendPromo(this.promo).subscribe(data=> {
    console.log(data);
      this.promInf = data
   })
    
  }



  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const newTheme = this.isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
}
