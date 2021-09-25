import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
API='http://localhost:8080/FoodCompany2';
  constructor(private http: HttpClient) { }

  public getFood()
  {
    return this.http.get(this.API+'/getFoodItems');
  }
  public filterFood(category:string)
  {
    return this.http.get(this.API+'/getByCategory?category='+category);
  }
  public addFood(addF:string)
  {
    return this.http.post(this.API+'/addFood',addF);
  }
  public login(username:any,password:any)
  {
    return this.http.get(this.API+'/Login?username='+username+'&'+'password='+password);
  }
  public delete(id:any)
  {
    return this.http.delete(this.API+'/deleteFoodItem?id='+id);
  }

  
  
}