import { EventEmitter, Injectable } from '@angular/core';
import { Package } from './package.model';
import { Food } from '../shared/food.model';
import { FoodListService } from '../food-list/food-list.service';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  packageSelected = new EventEmitter<Package>();

  private packages: Package[] = [
    new Package(
      'Churrasco',
      'Churrasco de Picanha',
      'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia7011/churrasco-cursos-cpt.jpg',
      [
        new Food('Picanha', 1),
        new Food('Sal', 1)
      ]
      ),

    new Package(
      'Salmão Grelhado', 
      'Salmão Grelhado na Brasa', 
      'https://www.dicasdemulher.com.br/wp-content/uploads/2020/01/salmao-grelhado-0.png',
      [
        new Food('Salmão', 1),
        new Food('Sal', 1)
      ]
      )

  ];

  constructor(private foodListService: FoodListService) { }

  getPackages() {
    return this.packages.slice();
  }

  addIngredientsToFoodList(ingredients: Food[]) {
    this.foodListService.addIngredients(ingredients)
  }

}
