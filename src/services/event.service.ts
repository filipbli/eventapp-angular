import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventClass } from 'src/class/event';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventsSubject = new BehaviorSubject<EventClass[]>([]);
  private selectedEventSubject = new BehaviorSubject<EventClass | undefined>(undefined);

  events$: Observable<EventClass[]> = this.eventsSubject.asObservable();
  selectedEvent$: Observable<EventClass | undefined> = this.selectedEventSubject.asObservable();

  eventsUrl = "http://localhost:3000/events";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.fetchEvents();
  }

  private fetchEvents() {
    this.http.get<EventClass[]>(this.eventsUrl).subscribe(
      events => this.eventsSubject.next(events),
      error => console.error('Error fetching events:', error)
    );
  }

  getEvents(): Observable<EventClass[]>{
    return this.events$;
  }

  getSelectedEvent(): Observable<EventClass | undefined>{
    return this.selectedEvent$;
  }

  selectEvent(event: EventClass) {
    this.selectedEventSubject.next(event);
  }

  addEvent(event: EventClass): Observable<EventClass> {
    return this.http.post<EventClass>(this.eventsUrl, event, this.httpOptions).pipe(
      tap(() => this.fetchEvents())
    );
  }

  deleteEvent(id: string): Observable<string> {
    return this.http.delete<string>(this.eventsUrl + '/' + id, this.httpOptions).pipe(
      tap(() => this.fetchEvents())
    );
  }

}
