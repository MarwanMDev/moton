import { Component, OnDestroy, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books/books.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/services/storage/storage.service';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  isLoggedIn = false;

  book: Book = {
    authorName: '',
    bookName: '',
    bookSize: '',
    category: {
      name: '',
    },
    createdAt: '',
    delivaryPrice: 0,
    description: '',
    editionOfBook: '',
    image: '',
    language: '',
    numberOfCovers: '',
    price: 0,
    publicationDate: '',
    publisherName: '',
    ratingsAverage: 0,
    ratingsQuantity: 0,
    slug: '',
    sold: 0,
    type: '',
    updatedAt: '',
    _id: '',
  };
  books: Book[] = [];

  private route = inject(ActivatedRoute);
  id$ = this.route.params.pipe(map((params) => params['id']));

  constructor(
    private bookService: BooksService,
    private cartService: CartService,
    private toastr: ToastrService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    this.id$.subscribe((id) => {
      if (!id) return;
      this.bookService.GetBookByID(id).subscribe((res) => {
        this.book = res.data;
      });
    });

    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.data;
    });
  }

  addToCart(bookId: string) {
    this.cartService.addToCart(bookId).subscribe((res) => {
      this.toastr.success(res.message);
    });
  }
}
