import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
  }
  public logIn(username:any,password:any)
  {
    this.foodService.login(username.value, password.value).subscribe(
      (resp)=>
      {
         console.log(resp);
      },
      (err)=>
      {
        console.log(err)
      }
      );
  }

}
