import { Book } from './../../interfaces/book';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { GetCategoryService } from '../../services/get-category/get-category.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryComponent } from '../category/category.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit{

  categoryList:any[] = [];
customOptions: OwlOptions = {
  loop: true,
  margin:10,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}



booksListSubscription!: Subscription; // Subscription for fetched books
booksList:Book[] = []; // this variable contains all of required books
activeCategorySubscription!: Subscription; // Subscription for category that cames from url
activeCategory!: string; // this variable contains active category that has been picked from url

  posterPrifix:string="https://image.tmdb.org/t/p/w500"
 constructor(private _GetCategoryService:GetCategoryService ,private title: Title, private route:ActivatedRoute , private router:Router, private api: ApiService)
 {


 }
//  _GetCategoryService.getCategory().subscribe((data)=>
//  this.categoryList=data.results
//  )
categoryName: any;

ngOnInit():void{

  /*
   *
   * picking the active category from url
   *
  */
  this.activeCategorySubscription = this.route.url.subscribe(url => {
    this.activeCategory = url[url.length - 1].path;
  })

  /*
   *
   * fetching all books then filtering them as needed
   *
  */

  this.booksListSubscription = this.api.get('books').subscribe(books => {
    this.booksList = books.data.filter((book: Book) => book.type == this.activeCategory);
    // take a look on console here it's the require books
    console.log(this.booksList)
    // Setting page title
    this.title.setTitle("Moton - " + this.activeCategory)
  })

  // unneeded block of code
  //** vvv **/
  // this._GetCategoryService.getCategory().subscribe({
  //   next:(response)=>{
  //     this.categoryList=response.data
  //     console.log(response.data);

  //   },
  //  error:(err)=>{
  //   console.log(err)
  //  }

  // })

  // this._ActivatedRoute.params.subscribe()


  // this._ActivatedRoute.params.subscribe(params => {
  //   this.categoryName = params['categoryName'];
  // });
}

navigateToCategory(categoryName: string) {
  // Navigate to the category page with the dynamic category name
  this.router.navigate(['/category/arabic/', categoryName]);
}


}













