import { Component } from '@angular/core';
import { ChartsService } from '../charts.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];
  
  public constructor(private service: ChartsService) {}

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
    this.chart = new Chart('MyChart', {
      type: 'doughnut', //this denotes tha type of chart
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of votes',
            data: realdata,
            backgroundColor: colordata,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
}
