import {async, TestBed} from '@angular/core/testing';
import {GeolocationModule} from './geolocation-module';

describe('GeolocationService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({imports: [GeolocationModule]});
  }));

  it('should pass the dummy test', () => {
    expect(true).toBeTruthy();
  });
});
