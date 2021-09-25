import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FoodService} from './food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodStore';
}
