import { Component, OnDestroy, OnInit } from '@angular/core';
import { Food } from '../shared/food.model';
import { FoodListService } from './food-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit, OnDestroy {

  foodList: Food[] = [];
  subscription: Subscription = new Subscription();

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.getFoods();
    this.subscription = this.foodListService.foodsChanged.subscribe((foods: Food[]) => {
      this.foodList = foods;
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
