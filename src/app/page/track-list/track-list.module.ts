import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackListRoutingModule } from './track-list-routing.module';
import { TrackList001Component } from './track-list001/track-list001.component';
import { TrackList001StatusComponent } from './track-list001-status/track-list001-status.component';
import { TrackList002StatusComponent } from './track-list002-status/track-list002-status.component';
import { TrackList002Component } from './track-list002/track-list002.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [TrackList001Component, TrackList001StatusComponent, TrackList002StatusComponent, TrackList002Component],
  imports: [
    CommonModule,
    TrackListRoutingModule,
    ComponentsModule
  ]
})
export class TrackListModule { }
