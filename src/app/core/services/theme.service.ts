import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { 
   
  }


  getTheme(theme?:string){
    const getTheme:any = localStorage.getItem('theme')

    document.body.setAttribute('data-theme', getTheme)
  }
  
}
