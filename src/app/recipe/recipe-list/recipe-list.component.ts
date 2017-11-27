import { Component, OnInit } from '@angular/core';
import { Receipt } from '../receipt.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  receipts = [
    new Receipt('Dulce de calabaza', '', 5.0, ''),
    new Receipt('', '', 5.0, ''),
  ];

  constructor() { }

  ngOnInit() {
  }

}
