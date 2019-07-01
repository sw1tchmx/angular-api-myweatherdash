import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { wbitdata } from '../models/wbitdata';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class WeatherbitService {
  private urlService = "https://api.weatherbit.io/v2.0/forecast/daily?lat=";

  constructor(private http: HttpClient)  { }
  getWeather(cname: string, utemp: string): Observable<wbitdata> {
    var vLong: any;
    var vLat: any;
    switch(cname){
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
    return this.http.get<wbitdata>(this.urlService + vLat + "101&lon="+vLong+"&days=15&units=" + utemp + "&key=a6514ef14da74157b9a1822a45ea30e3");

  }


}
