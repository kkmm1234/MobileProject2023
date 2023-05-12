import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  // Define an array to store the list of favourite recipes
  private favourites: any[] = [];

  constructor() {
    // Retrieve the saved favourites from local storage
    const savedFavourites = localStorage.getItem('favourites');
    // If there are saved favourites, parse and assign them to the component variable
    if (savedFavourites) {
      this.favourites = JSON.parse(savedFavourites);
    }
  }
  

  // Define a method to retrieve the list of favourite recipes
  getFavourites() {
    return this.favourites;
  }

  // Define a method to add a recipe to the list of favourite recipes
  addToFavourites(recipe: any) {
    this.favourites.push(recipe);
    localStorage.setItem('favourites', JSON.stringify(this.favourites));//storing favourites
    }

  // Method to remove a recipe from the favourites list
  removeFromFavourites(recipe: any) {
    // Find the index of the recipe to remove in the array of favourites
    const index = this.favourites.findIndex((r) => r.idMeal === recipe.idMeal);
    // If the recipe is found, remove it from the array of favourites
    if (index !== -1) {
      this.favourites.splice(index, 1);
       // Store the updated favourites list to local storage
       this.saveFavourites(); // Store the updated favourites in the local storage    }
    }
  }

  saveFavourites() {
    localStorage.setItem('favourites', JSON.stringify(this.favourites));//updating storage
  }  
}
