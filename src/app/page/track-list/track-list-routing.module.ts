import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackListModule } from './track-list.module';
import { TrackList001StatusComponent } from './track-list001-status/track-list001-status.component';
import { TrackList001Component } from './track-list001/track-list001.component';
import { TrackList002StatusComponent } from './track-list002-status/track-list002-status.component';
import { TrackList002Component } from './track-list002/track-list002.component';

const routes: Routes = [
  { path: 'tracklist001', component: TrackList001Component },
  { path: 'tracklist001status', component: TrackList001StatusComponent },
  { path: 'tracklist002', component: TrackList002Component },
  { path: 'tracklist002status', component: TrackList002StatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackListRoutingModule { }
