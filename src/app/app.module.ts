import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDToJODPipe } from './Pipes/usdto-jod.pipe';
import { OrderMasterComponent } from './Components/Order/product-list/order-master/order-master.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponentComponent } from './Components/NotFoundComponent/NotFoundComponent.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDToJODPipe,
    OrderMasterComponent,
    LoginComponent,
    NotFoundComponentComponent,
    MainLayoutComponent,
    ProductDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//this name AppModule on bootstrapModule(AppModule)
export class AppModule { }
