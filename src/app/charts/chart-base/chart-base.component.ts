import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts.service';
import Chart from 'chart.js/auto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-base',
  templateUrl: './chart-base.component.html',
  styleUrls: ['./chart-base.component.css']
})
export class ChartBaseComponent implements OnInit{
  public chart: any;
  public chartInfo: any;
  public labeldata: any[] = [];
  public realdata: any[] = [];
  public colordata: any[] = [];
  
  constructor(public service: ChartsService) {}

  ngOnInit(): void {
    this.service.GetChartInfo().subscribe((result) => {
      this.chartInfo = result;
      if (this.chartInfo != null) {
        for (let i = 0; i < this.chartInfo.length; i++) {
          this.labeldata.push(this.chartInfo[i].year);
          this.realdata.push(this.chartInfo[i].amount);
          this.colordata.push(this.chartInfo[i].colorcode);
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  createChart(labeldata: any, realdata: any, colordata: any) {
  }
}
