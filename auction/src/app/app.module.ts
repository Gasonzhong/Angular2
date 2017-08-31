import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { StartsComponent } from './starts/starts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { ProductService } from "./shared/product.service";
import { FilterPipe } from './pipe/filter.pipe';
import{ FormsModule, ReactiveFormsModule}from '@angular/forms'

const routeConfig:Routes=[
  {path:'',component:HomeComponent},
    {path:'product/:productId',component:ProductDetailComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    FooterComponent,
    StartsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
     ReactiveFormsModule,
     FormsModule
  ], 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
