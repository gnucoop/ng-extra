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

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';

import {E2EApp, Home} from './e2e-app/e2e-app';
import {E2E_APP_ROUTES} from './e2e-app/routes';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(E2E_APP_ROUTES),
    NoopAnimationsModule,
    MatListModule
  ],
  declarations: [
    E2EApp,
    Home
  ],
  bootstrap: [E2EApp],
})
export class E2eAppModule { }
