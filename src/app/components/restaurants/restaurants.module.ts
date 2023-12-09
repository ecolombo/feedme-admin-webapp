import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsComponent } from './restaurants.component';

@NgModule({
  declarations: [
    RestaurantsComponent
    ],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule
  ]
})
export class RestaurantsModule { }
