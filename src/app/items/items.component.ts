import { Component, OnInit } from '@angular/core';
import {FoodService} from '../food.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ngOnInit(): void {
  }
  foodD:any=[];
  constructor(private foodService:FoodService)
  {
    this.getFoodInfo();
  }
  public getFoodInfo()
  {
    this.foodService.getFood().subscribe(
      (resp)=>{

        console.log(resp);
        this.foodD=resp;
    },
    (err)=>
    {
      console.log(err);
    }
    );
  }
  public delete(food:any)
  {
    this.foodService.delete(food.id).subscribe(
      (resp)=>{

        console.log(resp);
       
    },
    (err)=>
    {
      console.log(err);
    }
    );
  }
 
 

}
