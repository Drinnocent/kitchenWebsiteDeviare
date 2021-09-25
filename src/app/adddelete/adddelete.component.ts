import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-adddelete',
  templateUrl: './adddelete.component.html',
  styleUrls: ['./adddelete.component.css']
})
export class AdddeleteComponent implements OnInit {

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
  }
  public addFoodItem(addF:NgForm)
  {
    this.foodService.addFood(addF.value).subscribe(
      (resp)=>
      {
        console.log(resp);
        addF.reset();
      },
      (err)=>
      {
        console.log(err);
      }
      );

  }

}
