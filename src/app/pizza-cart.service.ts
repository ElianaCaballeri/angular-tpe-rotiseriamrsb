import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from './pizza-list/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaCartService {

 private _pizza_list: Pizza[] = [];
 pizza_list: BehaviorSubject<Pizza[]> = new BehaviorSubject([]);
 
  constructor() { }

  agregarCarrito(pizza: Pizza) {
   let item: Pizza = this._pizza_list.find((v1) => v1.name == pizza.name);
    if(!item){
      this._pizza_list.push({ ... pizza});
    }
    else{
      item.quantity += pizza.quantity;
    }
    console.log(this._pizza_list);
    this.pizza_list.next(this._pizza_list);
  }


}
