import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ITgButton } from '../../data/interfaces/tg.interface';



@Injectable({
  providedIn: 'root'
})



export class TelegramService {
  private window;
  tg;
  constructor(@Inject(DOCUMENT) private _document: any) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
  }

  get MainButton(): ITgButton {
    return this.tg.MainButton;
  }

  get BackButton(): ITgButton {
    return this.tg.BackButton;
  }

  sendData(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }

  ready() {
    this.tg.ready();
  }
}
