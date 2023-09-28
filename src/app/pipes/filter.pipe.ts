import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/book';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param books list of elements to search in
   * @param keyword search string
   * @returns list of elements filtered by search text or []
   */
  transform(books: Book[], keyword: string): Book[] {
    if (!books) {
      return [];
    }
    if (!keyword) {
      return books;
    }
    keyword = keyword.toLocaleLowerCase();

    return books.filter((book) => {
      return book.bookName.toLocaleLowerCase().includes(keyword);
    });
  }
}
