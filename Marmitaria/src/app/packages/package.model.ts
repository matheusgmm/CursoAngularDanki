import { Food } from "../shared/food.model";

export class Package {

    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Food[]

    constructor(name: string, description: string, imagePath: string, ingredients: Food[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        
    }
}