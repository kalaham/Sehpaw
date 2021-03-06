import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-radar',
  templateUrl: './grafico-radar.component.html',
  styles: []
})
export class GraficoRadarComponent implements OnInit {

  @Input('chartLabels') radarChartLabels: string[] = [];
  @Input('chartData') radarChartData: any = [];
  @Input('chartType') radarChartType: string = 'radar';

  options= {
    scale: {
      ticks: {
        max: 5,
        min: 0,
        stepSize: 1
      }
    }
  }

  constructor() {
    // console.log(this.radarChartData, this.radarChartLabels);

  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
