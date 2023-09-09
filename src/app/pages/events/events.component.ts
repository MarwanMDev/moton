
import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {
constructor(private _EventService:EventService, private api: ApiService){

}
newEvents:any=[];
eventsSubscription!: Subscription;
posterPrifix:string="https://image.tmdb.org/t/p/w500/"

ngOnInit():void{

  this.eventsSubscription = this.api.get('events').subscribe(events => {
    this.newEvents = events.data;
  })

  // this._EventService.getEvents().subscribe({
  //   next:(response)=>{
  //     this.newEvents=response.data
  //     console.log(response.data);

  //   },
  //  error:(err)=>{
  //   console.log(err)
  //  }

  // })
}

ngOnDestroy(): void {
  // Stoping subsctiption on events when destroing the component
  this.eventsSubscription.unsubscribe()
}

}

