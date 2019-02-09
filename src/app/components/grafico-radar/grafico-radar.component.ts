import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-radar',
  templateUrl: './grafico-radar.component.html',
  styles: []
})
export class GraficoRadarComponent implements OnInit {

  @Input('chartLabels') radarChartLabels: string[] = [];
  @Input('chartData') radarChartData: number[] = [];
  @Input('chartType') radarChartType: string = 'radar';

  constructor() {
    console.log(this.radarChartData);
    
   }

  ngOnInit() {
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
