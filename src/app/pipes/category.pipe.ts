import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(books: Book[], filters: string[]): Book[] {
    if (!books) {
      return [];
    }
    if (filters.length < 1) {
      return books;
    }

    return books.reduce((acc: any, book) => {
      if (filters.some((filter) => filter == book.category.name)) {
        acc.push(book);
      }
      return acc;
    }, []);
  }
}
