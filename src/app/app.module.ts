import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './forecast/forecast.component';
import { RouterModule } from '@angular/router';
import { WeatherbitService } from './api/weatherbit.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ChartsModule,
    
    RouterModule.forRoot([
      { path: '', component: ForecastComponent, pathMatch: 'full' },
      { path: 'city/:name/:utemp', component: ForecastComponent },
    ]),
    
    BrowserAnimationsModule
  ],
  providers: [WeatherbitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
