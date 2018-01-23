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

import {Component, ViewEncapsulation} from '@angular/core';

/**
 * Home component for welcome message in DemoApp.
 */
@Component({
  selector: 'home',
  template: `
    <p>Welcome to the development demos for Ng-Extra!</p>
    <p>Open the sidenav to select a demo.</p>
  `
})
export class Home {}

/**
 * DemoApp with toolbar and sidenav.
 */
@Component({
  moduleId: module.id,
  selector: 'demo-app',
  templateUrl: 'demo-app.html',
  styleUrls: ['demo-app.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class DemoApp {
  dark = false;
  navItems = [
    {name: 'Geolocation', route: '/geolocation'}
  ];
}
