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
}
