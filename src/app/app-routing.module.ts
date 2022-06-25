import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { NewRecipeComponent } from './new-recipe/containers/new-recipe/new-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'new-recipe',
        component: NewRecipeComponent,
      },
      {
        path: ':recipeId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./recipes/recipes.module').then((m) => m.RecipesModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
