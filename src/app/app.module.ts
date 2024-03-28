import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventDetailsComponent } from './event-details/event-details.component';
import { provideRouter } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailsComponent,
    AdminComponent,
    EventFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
