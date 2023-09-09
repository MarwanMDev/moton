import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventInfoService } from '../../services/event-info/event-info.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Event } from 'src/app/interfaces/event';
@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.css']
})
export class EventInfoComponent implements OnInit, OnDestroy {
  constructor(private _EventInfoService:EventInfoService, private route: ActivatedRoute, private api: ApiService){}
  newEventInfo:any=[]; // uneeded variable changed by "activeEvent" variable
  posterPrifix:string="https://image.tmdb.org/t/p/w500/"


  eventIdSubscription!: Subscription; // Subscription for url id
  eventSubscription!: Subscription; // subscription for fetched data
  activeEvent!: Event; // that variable contains the required event depends on url
  activeEventId!: string | null; // this variable contains the active event id that comes from url

  ngOnInit():void
  {

    // Picking id from url
    this.eventIdSubscription = this.route.queryParams
      .subscribe(params => {
        this.activeEventId = params['event'];
      }
    );

    // fetching the require event depends on id
    this.eventSubscription = this.api.get('events').subscribe(events => {
      this.activeEvent = events.data.filter((data: Event) => data._id == this.activeEventId)[0]
      // take a look on console here it's the require event
      console.log(this.activeEvent)
    })
  }

  ngOnDestroy(): void {
      // stop all subscriptions when component destroy
      this.eventIdSubscription.unsubscribe()
      this.eventSubscription.unsubscribe()
  }
}
