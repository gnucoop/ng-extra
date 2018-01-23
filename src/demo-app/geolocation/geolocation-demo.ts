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

import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {Geolocation} from '@gnucoop/ng-extra/geolocation';


@Component({
  moduleId: module.id,
  selector: 'geolocation-demo',
  templateUrl: 'geolocation-demo.html'
})
export class GeolocationDemo {
  readonly geolocationAvailable: boolean;

  private _currentPosition: Position;
  get currentPosition(): Position { return this._currentPosition; }

  private _watchedPosition: Observable<Position>;
  get watchedPosition(): Observable<Position> { return this._watchedPosition; }

  private _positionGet: boolean;
  get positionGet(): boolean { return this._positionGet; }

  private _positionWatch: boolean;
  get positionWatch(): boolean { return this._positionWatch; }

  private _getPositionError: string;
  get getPositionError(): string { return this._getPositionError; }

  constructor(private _geolocation: Geolocation) {
    this.geolocationAvailable = this._geolocation.geolocationAvailable;
    this._watchedPosition = this._geolocation.watchPosition();
  }

  getPosition(): void {
    this._positionGet = true;
    this._getPositionError = '';
    const s = this._geolocation.getCurrentPosition()
      .subscribe(
        position => {
          if (s != null && !s.closed) {
            s.unsubscribe();
          }
          this._currentPosition = position;
          this._positionGet = false;
        },
        err => {
          if (s != null && !s.closed) {
            s.unsubscribe();
          }
          this._positionGet = false;
          this._getPositionError = JSON.stringify(err);
        }
      );
  }

  watchPosition(): void {
    this._positionWatch = true;
  }

  unwatchPosition(): void {
    this._positionWatch = false;
  }
}
