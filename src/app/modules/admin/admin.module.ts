import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterationComponent } from './components/auth/registeration/registeration.component';
import { AddcategoryComponent } from './components/data/addcategory/addcategory.component';
import { AddpostComponent } from './components/data/addpost/addpost.component';
import { ViewpostComponent } from './components/data/viewpost/viewpost.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/data/navbar/navbar.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    RegisterationComponent,
    AddcategoryComponent,
    AddpostComponent,
    ViewpostComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
