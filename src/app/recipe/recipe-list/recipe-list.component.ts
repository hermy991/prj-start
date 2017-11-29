import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipt } from '../receipt.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [
    new Receipt('Dulce de calabaza', 'Postres', 5.0,
    'https://www.hola.com/imagenes/cocina/recetas/20171010100402/receta-dulce-calabaza/0-495-53/dulce-calabaza-a.jpg'),
    new Receipt('Ensalada de verdura y pasta \'gargenelli\'', 'Ensaladas', 5.0,
    'https://www.hola.com/imagenes/destacadas/199-21-ensalada_pasta.jpg'),
    new Receipt('Flan de espinacas, acelgas y gambas', 'Verduras', 5.0,
    'https://www.hola.com/imagenes/cocina/recetas/20171016100632/flan-acelgas-espinacas-gambas/0-496-658/flan-espinacas-b.jpg'),
  ];

  @Output() recipeSelected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(index) {
    this.recipeSelected.emit(this.recipes[index]);
  }
}
