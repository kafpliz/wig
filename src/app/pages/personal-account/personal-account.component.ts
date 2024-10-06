import { Component, inject } from '@angular/core';
import { PersonalAccountService } from '../../core/services/personal-account.service';
import { IPersonalAccount } from '../../data/interfaces/personal-accaount.interface';
import { unixToDate } from '../../shared/utils/utils';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';
import { BackButtonComponent } from "../back-button/back-button.component";

@Component({
  selector: 'app-personal-account',
  standalone: true,
  imports: [CommonModule, BackButtonComponent],
  templateUrl: './personal-account.component.html',
  styleUrl: './personal-account.component.scss'
})
export class PersonalAccountComponent {
  #service = inject(PersonalAccountService)
  user: IPersonalAccount | null = null
  endDate: { message: string, isSub: boolean } | null = null
  themeService = inject(ThemeService)

   isDarkTheme = false;

  ngOnInit() {
    this.#service.getData('123').subscribe(data => {
      console.log(data);
      this.user = data;
      this.endDate = unixToDate(data.endDate)
    })
   
  }

  getSubClass() {
    if (this.endDate?.isSub == false) {
      return 'sub_condition_circle-red'
    } else {
      return 'sub_condition_circle-green'
    }
  }

  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const newTheme = this.isDarkTheme ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }
}
