import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   @ViewChild('lineChart', {static: false}) private lineChartRef;
   canvas: any;
   context: any;

  ngAfterViewInit() {
    this.canvas = this.lineChartRef.nativeElement; 
    this.context = this.canvas.getContext('2d');
     
    let myChart = new Chart(this.context, {
      type: 'line',
      data: {
        datasets: [{
          label: 'Data Set 1',
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(29, 74, 147)",
          fill: true,
          lineTension: 0,
          data: [
            { x: 200, y: 2 },
            { x: 1000, y: 4 },
            { x: 2000, y: 3 },
            { x: 3000, y: 6.5 },
            { x: 4000, y: 4.75 },
            { x: 5000, y: 6 },
            { x: 6000, y: 9 },
            { x: 7000, y: 6 },
          ],
        },
        {
          label: 'Data Set 2',
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(0, 173, 188)",
          fill: true,
          lineTension: 0,
          data: [
            { x: 200, y: 3 },
            { x: 1000, y: 2.5 },
            { x: 2000, y: 5 },
            { x: 3000, y: 5.8 },
            { x: 4000, y: 4 },
            { x: 5000, y: 5.4 },
            { x: 6000, y: 8.4 },
            { x: 7000, y: 5 },
          ],
        }]
      },
      options: {
        legend: {
          display: true,
            labels: {
              usePointStyle: true,
              fontColor: '#333',
              boxWidth: 4,
              fillStyle: '#333',
            }
        },
        responsive: true,
        title: {
          display: true,
          text: 'Sample Data'
        },
        scales: {
          xAxes: [{
            type: 'linear',
            gridLines: {
              display: false,
            },
            position: 'bottom',
            ticks: {
              userCallback: function (tick) {
                if (tick < 1000) {
                  return '12am';
                } else if (tick < 2000) {
                  return '1am';
                } else if (tick < 3000) {
                  return '2am';
                } else if (tick < 4000) {
                  return '3am';
                } else if (tick < 5000) {
                  return '4am';
                } else if (tick < 6000) {
                  return '5am';
                } else {
                  return '6am';
                }
              }
            },
          }],
          yAxes: [{
            type: 'linear',
            ticks: {
              userCallback: function (tick) {
                return tick.toString() + ' m/s';
              }
            },
          }]
        }
      }
    });

  }

}
