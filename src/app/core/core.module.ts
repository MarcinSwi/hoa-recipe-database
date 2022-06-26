import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { RecipesModule } from '../recipes/recipes.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainLayoutComponent, NavbarComponent, InfoDialogComponent],
  imports: [CommonModule, RouterModule, RecipesModule, SharedModule],
})
export class CoreModule {}
