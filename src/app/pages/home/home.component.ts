import { Component } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { Book } from 'src/app/interfaces/book';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLoading: boolean = false;
  public books: Book[] | undefined;
  customOptions: OwlOptions = {
    loop: false,
    rtl: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  activeSlides?: SlidesOutputData;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.booksService.getAllBooks().subscribe((res) => {
      this.isLoading = false;
      this.books = res.data;
      this.books?.sort((a, b) => {
        return (
          <any>new Date(b.createdAt) - <any>new Date(a.createdAt)
        );
      });
      this.books = this.books?.slice(0, 10);
    });
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
  }
}
