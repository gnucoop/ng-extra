import {Component, NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {BrowserModule} from '@angular/platform-browser';

import {map} from 'rxjs/operators/map';

import {Geolocation, GeolocationModule} from '@gnucoop/ng-extra/geolocation';


@Component({
  selector: 'kitchen-sink',
  templateUrl: './kitchen-sink.html',
  styleUrls: ['./kitchen-sink.css'],
})
export class KitchenSink {}


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'kitchen-sink'}),
    GeolocationModule
  ],
  bootstrap: [KitchenSink],
  declarations: [KitchenSink],
})
export class KitchenSinkClientModule {
  constructor(geolocation: Geolocation) {
    geolocation.getCurrentPosition()
      .pipe(map((p) => JSON.stringify(p)))
      .subscribe(console.log);
  }
}


@NgModule({
  imports: [KitchenSinkClientModule, ServerModule],
  bootstrap: [KitchenSink],
})
export class KitchenSinkServerModule { }
