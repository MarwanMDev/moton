import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  private route = inject(ActivatedRoute);
  type$ = this.route.params.pipe(map((params) => params['type']));

  books: Book[] = [];

  constructor(private bookService: BooksService) {}

  categoryName: any;

  ngOnInit(): void {
    this.type$.subscribe((type) => {
      if (!type) return;

      this.bookService.getAllBooks().subscribe((res) => {
        this.books = res.data;
        this.books = this.books?.filter((b) => b.type === type);
      });
    });
  }
}
