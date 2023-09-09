import { TestBed } from '@angular/core/testing';

import { BookDetailsSService } from './book-details-s.service';

describe('BookDetailsSService', () => {
  let service: BookDetailsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
