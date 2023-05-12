import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  // Define private class members for API key and base URL
  private readonly API_KEY = '1';
  private readonly BASE_URL = 'https://www.themealdb.com/api/json/v2/1';

  constructor(private http: HttpClient) {}

  // Method to get a list of random recipes from the API
  getRecipes(): Observable<any> {
    // Construct the URL with the number of recipes to retrieve
    const url = `${this.BASE_URL}/randomselection.php?number=6`;
    // Use the HttpClient to make a GET request to the API
    return this.http.get(url);
  }

  // Method to get the details of a specific recipe from the API
  getRecipeDetails(recipeId: string): Observable<any> {
    // Construct the URL with the recipe ID to retrieve
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
    // Use the HttpClient to make a GET request to the API
    return this.http.get(url);
  }
  
}
