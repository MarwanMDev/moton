import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { BookDetailsSService } from '../../services/book-details/book-details-s.service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Book } from 'src/app/interfaces/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  constructor(private _BookDetailsSService:BookDetailsSService, private api: ApiService, private route: ActivatedRoute){}
  showBook:any=[]; // unneeded variable
  posterPrifix:string="https://image.tmdb.org/t/p/w500/";

  activeBookIdSubscription!: Subscription; // Subscription for book id "that cames from url"
  activeBookId!: string | null; // this variable contains the collected id from the url
  activeBookSubscription!: Subscription; // Subscription for active book
  activeBook!: Book; // this variable contains the required book

  ngOnInit():void{
    // this.getBook(id:String)

    /*
     *
     * Picking id from url
     *
    */
    this.activeBookIdSubscription = this.route.url.subscribe(url => {
      this.activeBookId = url[url.length - 1].path;
    })

    /*
     *
     * Fetching all books from the server then filtering the require book
     *
    */
    this.activeBookSubscription = this.api.get('books').subscribe(books => {
      this.activeBook = books.data.filter((book: Book) => book.id == this.activeBookId);
       // take a look on console here it's the require event
      console.log(this.activeBook)
    })
  }

  // unneeded function
  getBook(id:string){
    this._BookDetailsSService.getBookDetails(id).subscribe({
      next:(response)=>{
        this.showBook=response.data
        console.log(response.data);

      },
     error:(err)=>{
      console.log(err)
     }

    })
  }


  toggleStar(book: any) {
    // Implement logic to toggle the star icon for the given book
    book.isStarred = !book.isStarred;
  }

  toggleHeart(book: any) {
    // Implement logic to toggle the heart icon for the given book
    book.isHearted = !book.isHearted;
  }

  ngOnDestroy(): void {
    // Stoping all of subscriptions when component destroy
    this.activeBookIdSubscription.unsubscribe;
    this.activeBookSubscription.unsubscribe;
  }
}
