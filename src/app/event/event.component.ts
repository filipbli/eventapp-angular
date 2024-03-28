import { Component, OnInit } from '@angular/core';
import { EventClass } from 'src/class/event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  constructor(private eventsService: EventService) {
  }

  eventsList: EventClass[] = [];

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(events => this.eventsList = events);
  }

  selectEvent(event: EventClass) {
    this.eventsService.selectEvent(event);
  }

  sortByDate(eventsList: EventClass[]) {
    let current: EventClass;
    for(let i = 0; i < eventsList.length; i++) {
      current = eventsList[i];
      let j = i - 1;

      while(j >= 0 && eventsList[j].date > current.date) {
        eventsList[j + 1] = eventsList[j];
        j--;
      }

      eventsList[j + 1] = current;
    }

    return eventsList;
  }
}
