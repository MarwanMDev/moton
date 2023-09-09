import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BooksService } from '../../services/books/books.service';
import { TrendBooks } from '../../interfaces/trend-books';
import { EnvironmentProviders } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _BooksService:BooksService)
 {


 }

//  _BooksService.getTrending().subscribe((data)=>
//   this.trendingbooks=data.results
//   )

  ngOnInit():void{
    this._BooksService.getTrending().subscribe({
      next:(response)=>{
        this.trendingbooks=response.data
        console.log(response.data);

      },
     error:(err)=>{
      console.log(err)
     }

    })
  }

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
  trendingbooks:any=[];
  posterPrifix:string="https://image.tmdb.org/t/p/w500/"

  }







