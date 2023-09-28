import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  cartId$ = this.route.params.pipe(map((params) => params['cartId']));
  isChecked: boolean = true;
  payment: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getUserCart().subscribe((cart) => {
      console.log(cart);
    });
  }
}
