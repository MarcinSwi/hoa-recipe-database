import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewRecipe, Recipe } from 'src/app/recipes/model/recipe.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private _snackBar: MatSnackBar) {}

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
    }).then((response) =>
      response.ok
        ? this._snackBar.open('Recipe has been added!', 'Dismiss', {})
        : this._snackBar.open('There something goes wrong :(', 'Dismiss', {})
    );
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
    ).then((response) =>
      response.ok
        ? this._snackBar.open('Recipe has been updated!', 'Dismiss', {})
        : this._snackBar.open('There something goes wrong :(', 'Dismiss', {})
    );
  }

  async removeRecipe(id: string) {
    return fetch(
      `https://crudcrud.com/api/${environment.crudeId}/recipe/${id}`,
      {
        method: 'DELETE',
      }
    ).then((response) =>
      response.ok
        ? this._snackBar.open('Recipe has been deleted!', 'Dismiss', {})
        : this._snackBar.open('There something goes wrong :(', 'Dismiss', {})
    );
  }
}
