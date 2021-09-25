import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
foodItems:any=[];
foodV:any='';
isShowTable=false;
isShowCard:boolean=false;

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
  }
  public filterItems(category:any)
  {
    this.foodService.filterFood(category.value).subscribe(
      (resp)=>{

        console.log(resp);
        this.foodItems=resp;
        this.isShowTable=true;
        console.log(this.foodItems);
    },
    (err)=>
    {
      console.log(err);
      console.log(this.foodItems);
    }
    );
  }
  public passFood(food:any)
  {
    this.foodV=food;
    this.isShowCard=true;
  }

}
