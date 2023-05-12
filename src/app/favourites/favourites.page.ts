import { Component, OnInit } from '@angular/core';
import { BrowserService } from '../browser.service';
import { RecipeApiService } from '../recipe-api.service';
import { Router } from '@angular/router';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favourites: any[] = [];

  constructor(
    private router: Router,
    private browserService: BrowserService,
    private recipeApiService: RecipeApiService,
    private favouritesService: FavouritesService
  ) {
    // Initialize the favourites array with data from the FavouritesService
    this.favourites = this.favouritesService.getFavourites();
  }

  ngOnInit() {
  }

  // Method to open a browser window and navigate to a URL
  openBrowser() {
    this.browserService.openBrowser('https://www.google.com');
  }

  // Method to get the list of favourite recipes
  getFavorites(): any[] {
    return this.favourites;
  }

  // Method to remove a recipe from the favourites list
  removeFromFavourites(recipe: any) {
    this.favouritesService.removeFromFavourites(recipe);
  }
}
