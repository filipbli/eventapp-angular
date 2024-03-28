import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventClass } from 'src/class/event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit{

  private id = 0;
  private listLength = 0;

  eventsList: EventClass[] = [];
  name: string;
  description: string;
  date: Date;

  constructor(private eventsService: EventService) {
    this.name = '';
    this.description = '';
    this.date = new Date;
  }

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
    this.eventsService.addEvent(new EventClass(this.generateId().toString(), this.name, this.date, this.description)).subscribe();
    this.name = '';
    this.date = new Date;
    this.description = '';
  }

}
