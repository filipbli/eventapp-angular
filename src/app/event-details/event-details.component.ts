import { Component, OnInit } from '@angular/core';
import { EventClass } from 'src/class/event';
import { EventService } from 'src/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  constructor(private eventsService: EventService) {}

  selectedEvent: EventClass | undefined;
  imagesList: string[] = [];

  ngOnInit() {
    this.imagesList.push('./assets/plecak.jpg');
    this.imagesList.push('./assets/polski.jpg');
    this.getEvent();
    console.log(this.getSelectedImage(this.selectedEvent?.id))
  }

  getEvent() {
    this.eventsService.getSelectedEvent().subscribe(event => this.selectedEvent = event);
  }

  getSelectedImage(id: string | undefined) {
    if(id != null && this.imagesList.length > 0) {
      return this.imagesList[parseInt(id)];
    } 
    return '';
  }

  getImage(number: number) {
    return this.imagesList[number];
  }
}
