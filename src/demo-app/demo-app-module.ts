/**
 * Copyright (C) 2018 Gnucoop soc. coop.
 * 
 * This file is part of ng-extra.
 * 
 * ng-extra is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * ng-extra is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with ng-extra.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */

import {ApplicationRef, NgModule} from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatListModule,
  MatSidenavModule, MatToolbarModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DEMO_APP_ROUTES} from './demo-app/routes';
import {DemoApp} from './demo-app/demo-app';
import {DemoModule} from './demo-app/demo-module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemoModule,
    RouterModule.forRoot(DEMO_APP_ROUTES),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [
    DemoApp
  ],
  entryComponents: [
    DemoApp
  ],
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoApp);
  }
}
