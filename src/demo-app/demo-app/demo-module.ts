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
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';

import {DemoNgExtraModule} from '../demo-ng-extra-module';
import {GeolocationDemo} from '../geolocation/geolocation-demo';
import {Home} from './demo-app';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    DemoNgExtraModule
  ],
  declarations: [
    GeolocationDemo,
    Home
  ]
})
export class DemoModule {}
