import { Injectable } from '@angular/core';
import { NewRecipe, Recipe } from 'src/app/recipes/model/recipe.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  async getAllRecipes() {
    return fetch(`https://crudcrud.com/api/${environment.crudeId}/recipe`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  }

  async getRecipe(id: string) {
    return fetch(`https://crudcrud.com/api/${environment.crudeId}/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }

  async addRecipe(recipe: NewRecipe) {
    return fetch(`https://crudcrud.com/api/${environment.crudeId}/recipe`, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      method: 'POST',
      body: JSON.stringify({
        name: recipe.name,
        preparationTimeInMinutes: recipe.preparationTimeInMinutes,
        description: recipe.description,
        ingredients: recipe.ingredients,
      }),
    })
      .then((response) => response.json())
      .then((data) => data);
  }

  async editRecipe(recipe: Recipe) {
    return fetch(
      `https://crudcrud.com/api/${environment.crudeId}/recipe/${recipe._id}`,
      {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify({
          name: recipe.name,
          preparationTimeInMinutes: recipe.preparationTimeInMinutes,
          description: recipe.description,
          ingredients: recipe.ingredients,
        }),
      }
    );

    // .then((response) => console.log(response));
  }

  async removeRecipe(id: string) {
    return fetch(
      `https://crudcrud.com/api/${environment.crudeId}/recipe/${id}`,
      {
        method: 'DELETE',
      }
    );
    // .then((response) => console.log(response));
  }
}
