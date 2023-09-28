import { Component } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public books: Book[] | undefined;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((res) => {
      this.books = res.data;
    });
  }
}
