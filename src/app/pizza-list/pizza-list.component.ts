import { Component, OnInit } from '@angular/core';
import { PizzaCartService } from '../pizza-cart.service';
import { Pizza } from './Pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
pizzas : Pizza[] =[
{
  "name":"Muzzarella",
  "description":"Esta compuesta por una masa baja y crocante con una cubierta de salsa de tomate, mozzarella, aceitunas y orégano.",
  "price":250,
  "stock":5,
  "image":"assets/img/pizza_de_mozzarella.jpg",
  "clearance": false,
  "quantity":0,
},
{
  "name":"Jamón crudo y rucula",
  "description":"Tiene de base la pizza mozzarella con un agregado de finas fetas de jamón crudo y mucha rúcula",
  "price":380,
  "stock":20,
  "image":"assets/img/pizza_crudo_y_rucula.jpg",
  "clearance": true,
  "quantity":0,
},
{
  "name":"Napolitana",
  "description":"La pizza napolitana es una pizza de mozzarella con el agregado de finas rodajas de tomate natural en la superficie y un condimento a base de aceite de oliva, ajo y perejil finamente picados",
  "price":350,
  "stock":0,
  "image":"assets/img/pizza-napolitana.jpg",
  "clearance": false,
  "quantity":0,
} 
];

  constructor(private pizza_service : PizzaCartService){
    
  }

  ngOnInit(): void {
  }
 cant_maxReached(mje: string){
   alert(mje);
 }
 agregarCarrito(pizza) : void{
   this.pizza_service.agregarCarrito(pizza)
   pizza.stock -= pizza.quantity;
   pizza.quantity = 0;
 }

}


