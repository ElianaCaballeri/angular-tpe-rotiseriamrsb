import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PizzaCartService } from '../pizza-cart.service';
import { Pizza } from '../pizza-list/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  pizza_list$: Observable<Pizza[]>;

  constructor(private pizza_service : PizzaCartService) {
   this.pizza_list$ = pizza_service.pizza_list.asObservable();
   }

  ngOnInit(): void {
  }
 
}
