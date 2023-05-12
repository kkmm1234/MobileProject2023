import { Component, OnInit } from '@angular/core';
import { BrowserService } from '../browser.service'; 
import { RecipeApiService } from '../recipe-api.service'; // Importing RecipeApiService to make API calls
import { Router } from '@angular/router'; // Importing Router to navigate to different pages

@Component({
  selector: 'app-recipes', 
  templateUrl: './recipes.page.html', 
  styleUrls: ['./recipes.page.scss'], 
})
export class RecipesPage implements OnInit { 
  recipes: any[] = []; // Array to store recipe data

  constructor(
    private router: Router, 
    private browserService: BrowserService, // BrowserService instance
    private recipeApiService: RecipeApiService // RecipeApiService instance
  ) {}

  ngOnInit() {
    // Call the method from RecipeApiService to get recipe data
    this.recipeApiService.getRecipes().subscribe((data: any) => {
      // Store the data in your component variable
      this.recipes = data.meals;
    });
  }

  openBrowser() {
    this.browserService.openBrowser('https://www.google.com'); // Method to open browser with Google URL
  }

  async refreshRecipes() {
    this.recipeApiService.getRecipes().subscribe((data: any) => {
      // Store the data in component variable
      this.recipes = data.meals;
    });
  }
}
