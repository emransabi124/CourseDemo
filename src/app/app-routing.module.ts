import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/product-list/order-master/order-master.component';
import { NotFoundComponentComponent } from './Components/NotFoundComponent/NotFoundComponent.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

//child router get some paths  if have tow layout admin and cust
const routes: Routes = [
  //sorting very impotent ** must last field  
  
    {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'/Home',pathMatch:'full'},//defualt path 
      {path:'Home',component:HomeComponent},
      {path:'Products',component:ProductListComponent},
      {path:'Products/:prd',component:ProductDetailsComponent},
      {path:'Orders',component:OrderMasterComponent},
    ]},//defualt path 

    {path:'Login',component:LoginComponent},
    {path:'**',component:NotFoundComponentComponent},//willd card path if user enter wrong name 

  ];




// //def for each component 

// const routes: Routes = [
// //sorting very impotent ** must last field  
//   {path:'',redirectTo:'/Home',pathMatch:'full'},//defualt path 
//   {path:'Home',component:HomeComponent},
//   {path:'Products',component:ProductListComponent},
//   {path:'Order',component:OrderMasterComponent},
//   {path:'Login',component:LoginComponent},
//   {path:'**',component:NotFoundComponentComponent},//willd card path if user enter wrong name 

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
