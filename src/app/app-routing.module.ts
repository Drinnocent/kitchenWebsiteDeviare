import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddeleteComponent } from './adddelete/adddelete.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'items',component:ItemsComponent},
  {path:'adddelete',component:AdddeleteComponent},
  {path:'search',component:SearchComponent},
  {path:'checkout',component:CheckoutComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
