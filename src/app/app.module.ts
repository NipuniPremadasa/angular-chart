import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HomeComponent } from './home/home.component';
import { ChartBaseComponent } from './charts/chart-base/chart-base.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent,
    HomeComponent,
    ChartBaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
