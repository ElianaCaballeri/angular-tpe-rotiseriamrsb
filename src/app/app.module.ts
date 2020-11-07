import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

import{  FormsModule } from '@angular/forms';
import { RotiseriaMrsBPizzasComponent } from './rotiseria-mrs-b-pizzas/rotiseria-mrs-b-pizzas.component';
import { RotiseriaMrsBAboutComponent } from './rotiseria-mrs-b-about/rotiseria-mrs-b-about.component';
import { CartComponent } from './cart/cart.component';
import { InputCompraComponent } from './input-compra/input-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    RotiseriaMrsBPizzasComponent,
    RotiseriaMrsBAboutComponent,
    CartComponent,
    InputCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
