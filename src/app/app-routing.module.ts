import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';

const routes: Routes = [
  {path:'',redirectTo:('product'),pathMatch:'full'},
  {path:"product",component:ProductComponent},
  {path:"category",component:CategoryComponent},
  {path:"register",component:RegistrationComponent},
  {path:"product-detailes",component:ProductDetailesComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
