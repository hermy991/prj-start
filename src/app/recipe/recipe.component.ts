import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: any;
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipe = recipe;
  }
}
