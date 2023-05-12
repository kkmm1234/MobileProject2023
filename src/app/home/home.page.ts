import { Component } from '@angular/core';
import { BrowserService } from '../browser.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
constructor(private browserService: BrowserService) { }
  
openBrowser() {
  this.browserService.openBrowser('https://www.google.com');
}
}
