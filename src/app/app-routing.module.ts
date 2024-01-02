import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuards } from './guards/auth.guard';
import { UsersComponent } from './components/users/users.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { ViewuserComponent } from './components/users/viewuser/viewuser.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AddrestaurantComponent } from './components/restaurants/addrestaurant/addrestaurant.component';
import { ViewrestaurantComponent } from './components/restaurants/viewrestaurant/viewrestaurant.component';
import { CategoriesComponent } from './components/restaurants/categories/categories.component';
import { DishesComponent } from './components/dishes/dishes.component';
import { AdddishComponent } from './components/dishes/adddish/adddish.component';

const routes: Routes = [

{ path: 'auth', children: [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]},
{ path: 'users', canActivate: [AuthGuards], children: [
  {path: '', component: UsersComponent},
  {path: 'create', component:AdduserComponent },
  {path: 'view', component:ViewuserComponent }
]},
{ path: 'restaurants', canActivate: [AuthGuards], children: [
  {path: '', component: RestaurantsComponent},
  {path: 'create', component: AddrestaurantComponent},
  {path: 'update', component: AddrestaurantComponent},
  {path: 'view', component: ViewrestaurantComponent},
  {path: 'categories', component: CategoriesComponent}
]},
{ path: 'dishes', canActivate: [AuthGuards], children: [
  {path: '', component: DishesComponent},
  {path: 'create', component: AdddishComponent},
  {path: 'update', component: AdddishComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
