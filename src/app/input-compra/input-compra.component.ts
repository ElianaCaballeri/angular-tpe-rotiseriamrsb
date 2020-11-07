import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../pizza-list/Pizza';

@Component({
  selector: 'app-input-compra',
  templateUrl: './input-compra.component.html',
  styleUrls: ['./input-compra.component.scss']
})
export class InputCompraComponent implements OnInit {

  constructor() {}

  @Input()
  quantity : number;

  @Input()
  cant_stock: number;
  
  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();

  @Output()
  cant_maxReached: EventEmitter<string>= new EventEmitter<string>();

  ngOnInit(): void {
  }
  upQuantity() : void{
    if(this.quantity< this.cant_stock){
        this.quantity++;
        this.quantityChange.emit(this.quantity)
      
    }
    else{
      this.cant_maxReached.emit("Llego al limite de pizzas disponibles.");
    }
  }


  downQuantity() : void{
    if(this.quantity > 0){
        this.quantity--;
        this.quantityChange.emit(this.quantity)
    }
  }
  
  
 
 
 /* if(pizza.quantity < 48 || pizza.quantity > 57 ){
 changeQuantity(event, pizza : Pizza):void{
    if(pizza.quantity==0||pizza.quantity ==8 ){
    event.preventDefault();}
  }   VA EN EL INPUT DEL BOTON + - type="text" (keyup)="changeQuantity($event, pizza)" */

}
