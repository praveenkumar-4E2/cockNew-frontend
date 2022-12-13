import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuard } from '../core/services/route.guard';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './components/auth/login/login.component';

import { RegisterationComponent } from './components/auth/registeration/registeration.component';
import { AddcategoryComponent } from './components/data/addcategory/addcategory.component';

const routes: Routes = [
  {
    path:'',
    component: AdminComponent,
    children:[
    
      {
        path:'admin',
        component:AddcategoryComponent,
        canActivate:[RouteGuard]
      },
      {
        path:'registeration',
        component:RegisterationComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ]

  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
