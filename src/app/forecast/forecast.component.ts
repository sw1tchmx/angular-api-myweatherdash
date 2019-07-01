import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import * as Chart from 'chart.js'
import { Router, ActivatedRoute } from '@angular/router';
import { wbitdata } from '../models/wbitdata';
import { weatherdata } from '../models/weatherdata';
import { WeatherbitService } from '../api/weatherbit.service';
declare var jQuery: any;

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  donut: ElementRef;
  chart = Chart;
  DayTemperatures: wbitdata;
  cityName: string;
  unitTemp: string;
  dataWeather: weatherdata;
  odates: string[];
  oInfo: number[];
  canvas: any;
  ctx: any;

  constructor(private DashBoardService: WeatherbitService, private router: Router,
    private activateRoute: ActivatedRoute, private location: Location) {
     
      this.cityName = 'CdObregon';
      this.unitTemp = 'M';
      this.location.replaceState('/city/' + this.cityName + '/' + this.unitTemp);
       
      this.DashBoardService.getWeather(this.cityName, this.unitTemp)
        .subscribe(temps => {
          this.cityName = 'CdObregon';
          this.DayTemperatures = temps;
          this.odates = [];
          this.oInfo = [];
          this.DayTemperatures.data.forEach(element => {
            this.odates.push(element.datetime.toString());
            this.oInfo.push(element.temp);
          });
  
          this.LoadChartGraph('Temperatures', this.odates, this.oInfo);
          error => console.error(error)
        });
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(param => {
      if (param["name"] == undefined || param["utemp"] == undefined) {
        return;
      }
      this.DashBoardService.getWeather(param["name"], param["utemp"])
        .subscribe(temps => {
          this.cityName = param["name"];
          this.DayTemperatures = temps;
          this.odates = [];
          this.oInfo = [];
          this.DayTemperatures.data.forEach(element => {
            this.odates.push(element.datetime.toString());
            this.oInfo.push(element.temp);
          });
  
          this.LoadChartGraph('Temperatures', this.odates, this.oInfo);
          error => console.error(error)
          error => console.error(error)
        });
    });
  }

  public ChangeByCity(city: string) {
    this.cityName = city;
    this.location.replaceState('/city/' + city + '/' + this.unitTemp);
    this.DashBoardService.getWeather(city, this.unitTemp)
      .subscribe(temps => {
        this.DayTemperatures = temps;
        this.odates = [];
        this.oInfo = [];
        this.DayTemperatures.data.forEach(element => {
          this.odates.push(element.datetime.toString());
          this.oInfo.push(element.temp);
        });

        this.LoadChartGraph('Temperatures', this.odates, this.oInfo);
        error => console.error(error)
        error => console.error(error)
      });
  }

  public ChangeByUnitTemperature(uTemp: string) {
    this.unitTemp = uTemp;
    this.location.replaceState('/city/' + this.cityName + '/' + this.unitTemp);
    this.DashBoardService.getWeather(this.cityName, uTemp)
      .subscribe(temps => {
        this.DayTemperatures = temps;
        this.odates = [];
        this.oInfo = [];
        this.DayTemperatures.data.forEach(element => {
          this.odates.push(element.datetime.toString());
          this.oInfo.push(element.temp);
        });

        this.LoadChartGraph('Temperatures', this.odates, this.oInfo);
        error => console.error(error)
        error => console.error(error)
      });
  }

  public LoadChartGraph(Title: string, labe: string[], num: number[]) {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: labe,
        datasets: [{
          label: Title,
          data: num,
          backgroundColor: [
            'rgba(59, 122, 184, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        
      }
    });
  }





}
