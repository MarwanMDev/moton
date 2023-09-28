import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { StorageService } from '../../../services/storage/storage.service';
import { Category } from 'src/app/interfaces/category';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  cart: Cart = {
    cartItems: [
      {
        _id: '',
        book: '',
        price: 0,
        quantity: 0,
      },
    ],
    totalCartPrice: 0,
    _id: '',
  };

  public categories: Category[] | undefined;
  public arabicCategories: Category[] | undefined;
  public englishCategories: Category[] | undefined;

  constructor(
    private categoryService: CategoryService,
    private storageService: StorageService,
    private cartService: CartService
  ) {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res.data;
      this.arabicCategories = this.categories?.filter(
        (c) => c.language === 'arabic'
      );
      this.englishCategories = this.categories?.filter(
        (c) => c.language === 'english'
      );
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  getUserCart(): void {
    this.cartService.getUserCart().subscribe((res) => {
      if (res && res.status == 'success') {
        this.cart = res.data;
      }
    });
  }

  removeItemFromCart(bookId: string): void {
    this.cartService.removeFromCart(bookId).subscribe((res) => {
      if (res && res.status == 'success') {
        this.cart = res.data;
      }
    });
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe((res) => {
      this.cart = {
        cartItems: [
          {
            _id: '',
            book: '',
            price: 0,
            quantity: 0,
          },
        ],
        totalCartPrice: 0,
        _id: '',
      };
    });
  }

  increment(value: any, i: any) {
    const initValue = 0;
    if (value != null) {
      const afterClick = value + 1;
      return (this.cart.cartItems[i].quantity = afterClick);
    } else {
      return (this.cart.cartItems[i].quantity = initValue + 1);
    }
  }

  decrement(value: any, i: any) {
    const initValue = 1;
    if (value > 1) {
      const afterClick = value - 1;
      return (this.cart.cartItems[i].quantity = afterClick);
    } else {
      return (this.cart.cartItems[i].quantity = initValue - 1);
    }
  }

  logout(): void {
    this.storageService.clean();
    window.location.reload();
  }
}
