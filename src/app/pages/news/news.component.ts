import { NewService } from '../../services/new/new.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnvironmentProviders } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor(private _NewService:NewService , private _CartService:CartService){

  }
  newBooks:any=[];
  cartClosed = false; // Initialize as false
  posterPrifix:string="https://image.tmdb.org/t/p/w500/"
  ngOnInit():void{
    this.cartClosed = this._CartService.isCartClosed();
    this.checkData();

    // const settingInnerElements = document.querySelectorAll('.shopping');

    // settingInnerElements.forEach(element => {
    //   if (element instanceof HTMLElement) {
    //     element.style.transition = 'opacity 2s';
    //     element.style.opacity = '0';

    //     element.addEventListener('transitionend', () => {
    //       element.style.display = 'none';
    //     });
    //   }
    // });


  }

  checkData(){
    this._NewService.getNews().subscribe({
      next:(response)=>{
        this.newBooks=response.data
        console.log(response.data);

      },
     error:(err)=>{
      console.log(err)
     }



    })
  }

  onDeleteData(id:string){
    this._NewService.delete_specialData(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.checkData();

      },
      error: (err) => {
        console.log('Error fetching Message data:', err);
      }

    })
  }

onDeleteallData(){
  this._NewService.delete_allData().subscribe({
    next:(res)=>{
      console.log(res);
      this.checkData();

    },
    error: (err) => {
      console.log('Error fetching Message data:', err);
    }

    })


  }

closecart(){

}

toggleCart() {
  this.cartClosed = !this.cartClosed;
  this._CartService.setCartClosed(this.cartClosed);
}


  // customOptions: OwlOptions = {
  //   loop: true,
  //   margin:10,
  //   mouseDrag: true,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

  toggleStar(book: any) {
    // Implement logic to toggle the star icon for the given book
    book.isStarred = !book.isStarred;
  }

  toggleHeart(book: any) {
    // Implement logic to toggle the heart icon for the given book
    book.isHearted = !book.isHearted;
  }

  // ...


}




