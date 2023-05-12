import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor() { }

  // This method opens a browser window with the provided URL
  async openBrowser(url: string) {
    // The Capacitor Browser plugin's "open" method is called with the URL argument
    await Browser.open({ url });
  }
}
