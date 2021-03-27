import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PortraitsComponent} from './portraits/portraits.component';
import {WeddingComponent} from './wedding/wedding.component';
 const routes: Routes = [
  
  {
    path:"Home",
    component: HomeComponent
  },
  {
    path:"Portraits",
    component: PortraitsComponent
  },
  {
    path:"Wedding",
    component: WeddingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
