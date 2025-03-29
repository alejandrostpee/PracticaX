import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { CartComponent } from './views/cart/cart.component';
import { ProductDetailsComponent } from './views/product-details/product-details.component';
import { ProductsComponent } from './views/products/products.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full'},
  { path: 'products', component:ProductsComponent},
  { path: 'product/:id', component:ProductDetailsComponent},
  { path: 'cart', component:CartComponent},
  { path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
