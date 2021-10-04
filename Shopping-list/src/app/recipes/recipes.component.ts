import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe[] =[
    new Recipe('A test recipe', 'Another Test','one more'),
    new Recipe('Somemore Tests', 'Wait another one','dear god')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(receipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
