import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartsService } from '../charts.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = [];
  private realdata: any[] = [];
  private colordata: any[] = [];
  
  public constructor(private service: ChartsService){

  }

  ngOnInit() : void{
    this.service.GetChartInfo().subscribe(result=>{
      this.chartInfo = result;
      if(this.chartInfo!=null){
        for(let i=0;i<this.chartInfo.length;i++){
          this.labeldata.push(this.chartInfo[i].year);
          this.realdata.push(this.chartInfo[i].amount);
          this.colordata.push(this.chartInfo[i].colorcode);
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);
      }
    })
  }

  createChart(labeldata: any, realdata: any, colordata: any){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: labeldata, 
	       datasets: [
          {
            label: "No of votes",
            data: realdata,
            backgroundColor: colordata,
          }, 
        ]
      },
      options: {
        aspectRatio:2,
      }
    });
  }
}
