import { EventEmitter, Injectable } from '@angular/core';
import { Food } from '../shared/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  foodsChanged = new EventEmitter<Food[]>();
  
  private foodList: Food[] = [
    new Food('Carne', 1),
    new Food('Arroz', 2),
    new Food('Couve Refogado', 2)
  ];

  constructor() { }
  
  getFoods() {
    return this.foodList.slice();
  }

  addFood(newFood: Food) {
    this.foodList.push(newFood);
    this.foodsChanged.emit(this.foodList.slice());
  }

  addIngredients(ingredients: Food[]) {
    this.foodList.push(...ingredients);
    this.foodsChanged.emit(this.foodList.slice());
  }

}
