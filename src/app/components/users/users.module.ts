import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    AdduserComponent,
    ViewuserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class UsersModule { }
