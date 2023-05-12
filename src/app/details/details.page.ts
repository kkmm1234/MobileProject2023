import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  recipe: any;
  ingredients: string[] =[];

  constructor(
    private route: ActivatedRoute,  // ActivatedRoute provides access to the current route's parameters
    private recipeApiService: RecipeApiService,  // RecipeApiService is a custom service for fetching recipe data
    private favouritesService: FavouritesService  // FavouritesService is a custom service for managing favourite recipes
  ) {}

  ngOnInit() {
    // Get the recipe ID from the URL parameter
    const recipeId = this.route.snapshot.paramMap.get('id') ?? '';

    // Call the method from RecipeApiService to get recipe data
    this.recipeApiService.getRecipeDetails(recipeId).subscribe((data: any) => {
      // Store the data in your component variable
      this.recipe = data.meals[0];

      // Parse the ingredient strings into an array
      this.ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = this.recipe[`strIngredient${i}`];
        if (ingredient) {
          const measurement = this.recipe[`strMeasure${i}`];
          this.ingredients.push(`${ingredient} - ${measurement}`);
        }
      }
    
    });
  }

  onAddToFavorites() {
    // Add the current recipe to favourites using FavouritesService
    this.favouritesService.addToFavourites(this.recipe);
  }
  
}
