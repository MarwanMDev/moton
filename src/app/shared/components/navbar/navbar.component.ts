import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor(private _CartService:CartService){

}

cartClosed=true;
ngOnInit(): void {
  this.cartClosed = this._CartService.isCartOpen();
}

toggleCart() {

  this.cartClosed = !this.cartClosed;
  this._CartService.setCartClosed(this.cartClosed);
}



}
