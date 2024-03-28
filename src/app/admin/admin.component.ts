import { Component, OnInit } from '@angular/core';
import { EventClass } from 'src/class/event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  private id = 0;
  private listLength = 0;

  constructor(private eventsService: EventService) {

  }

  eventsList: EventClass[] = [];
  name: string = '';
  description: string = '';

  ngOnInit() {
    this.getEvents();
    this.eventsService.getEvents().subscribe(events => this.listLength = events.length);
  }

  generateId() {
    if(this.listLength == 0) {
      return 0;
    } else {
      this.eventsService.getEvents().subscribe(events => this.id = parseInt(events[events.length - 1].id) + 1);
      return this.id;
    }
  }

  getEvents() {
    this.eventsService.getEvents().subscribe(events => this.eventsList = events);
  }

  addEvent() {
    this.eventsService.addEvent(new EventClass(this.generateId().toString(), this.name, new Date, this.description)).subscribe();
   }

  deleteEvent(event: EventClass) {
    this.eventsList = this.eventsList.filter(e => e !== event);
    this.eventsService.deleteEvent(event.id).subscribe();
  }

  selectEvent(event: EventClass) {
    this.eventsService.selectEvent(event);
  }
}

