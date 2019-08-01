import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { wbitdata } from '../models/wbitdata';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



// ** command
@Injectable({
  providedIn: 'root'
})
export class WeatherbitService {
  private urlService = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
  // miercoles
  constructor(private http: HttpClient)  { }
  getWeather(cname: string, utemp: string): Observable<wbitdata> {
    let vLong: any;
    let vLat: any;
    switch (cname) {
      case 'CdObregon':
        vLong = -109.9333;
        vLat = 27.4833;
        break;
      case 'Navojoa':
        vLong = -109.44391;
        vLat = 27.07015;
        break;
      case 'Hermosillo':
        vLong = -110.97732;
        vLat = 29.1026;
        break;
      case 'Nogales':
        vLong = -110.94217;
        vLat = 31.30862;
        break;
      default:
        vLong = -109.9333;
        vLat = 27.4833;
        break;
    }
    // tslint:disable-next-line: max-line-length
    return this.http.get<wbitdata>(this.urlService + vLat + '101&lon=' + vLong + '&days=15&units=' + utemp + '&key=29d273d0388741e2a78d622f60a4982a');

  }


}
