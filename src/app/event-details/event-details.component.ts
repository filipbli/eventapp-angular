import { Component, OnInit } from '@angular/core';
import { EventClass } from 'src/class/event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  constructor(private eventsService: EventService) {

  }

  selectedEvent: EventClass | undefined;

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    this.eventsService.getSelectedEvent().subscribe(event => this.selectedEvent = event);
  }
}
