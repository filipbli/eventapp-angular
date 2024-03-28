import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventComponent } from './event/event.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'main', component: AppComponent},
  {path: 'eventsList', component: EventComponent},
  {path: 'selectedEventDetails', component: EventDetailsComponent},
  {path: 'adminPanel', component: AdminComponent},
  {path: '', redirectTo: '/eventsList', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
