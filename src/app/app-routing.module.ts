import { RouteComponent } from './route/route.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { TripsComponent } from './trips/trips.component';
import { PlacesComponent } from './places/places.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
import { StatsComponent } from './stats/stats.component';
import {
  BottomNavRoutingComponent,
} from './bottomnav-routing/bottomnav-routing.component';
import { DynamicInputComponent } from './route/dynamic-input/dynamic-input.component';

const routes: Routes = [
  {
    path: 'bottomnav-routing',
    component: BottomNavRoutingComponent
  },
  { path: 'explore', component: ExploreComponent },
  { path: 'route', component: RouteComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'explore/results', component: ResultsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'dynInput', component: DynamicInputComponent},
  {
    path: '',
    component: StartScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
