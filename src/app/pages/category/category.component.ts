import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { CartService } from '../../services/cart/cart.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private _CategoryService:CategoryService , private title: Title, private _CartService:CartService, private api: ApiService, private route: ActivatedRoute){

  }
  cartClosed = false; // Initialize as false
  posterPrifix:string="https://image.tmdb.org/t/p/w500/";

  newBooks:any=[];
  booksSubscription!: Subscription; // subscribtion for books data
  languageSubscription!: Subscription; // subscribtion for language
  language!: string; // language that got from url param wheather [english || arabic]
  categoryIdSubscription!: Subscription; // subscribtion for category
  categoryId!: string; // category that got from url param wheather [english || arabic]

  ngOnInit():void{

    /*
     *
     * picking url param to get the require language & category
     *
    */
    this.languageSubscription = this.route.url.subscribe(params => {
      // this.language = params[params.length - 2].path
      // this.category = params[params.length - 1].path
      // if(params[params.length -1].path == "arabic" || params[params.length -1].path == "arabic")
      switch (params[params.length - 2].path) {
        case 'arabic':
        case 'english':
        this.language =  params[params.length - 2].path;
        this.categoryId = params[params.length - 1].path
        break;
        default:
          this.language =  params[params.length - 1].path;
      }
      console.log(this.language, this.categoryId)
    })

    // Setting page title
    this.title.setTitle('Moton - ' + this.language)

    /*
     *
     * fetching data & filtring it depends on language
     *
    */
    this.booksSubscription = this.api.get('books').subscribe(data => {
      this.newBooks = data.data.filter((book: any) => book.language == this.language.toLocaleLowerCase());
    })



    this.cartClosed = this._CartService.isCartClosed();


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

  ngOnDestroy(): void {
    /*
     *
     * Closing all subscribtions when component destroy
     *
    */
    this.languageSubscription.unsubscribe();
    this.categoryIdSubscription.unsubscribe();
    this.booksSubscription.unsubscribe()
  }

  // unneeded function
  checkData(){
    this._CategoryService.getCate().subscribe({
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
    this._CategoryService.delete_specialData(id).subscribe({
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
  this._CategoryService.delete_allData().subscribe({
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
