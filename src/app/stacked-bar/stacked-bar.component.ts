import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: [ './stacked-bar.component.css' ]
})
export class StackedBarComponent  {
   @ViewChild('stackedBar', {static: false}) private stackedBarRef;
   canvas: any;
   context: any;

  ngAfterViewInit() {
    this.canvas = this.stackedBarRef.nativeElement; 
    this.context = this.canvas.getContext('2d');
     
    let myChart = new Chart(this.context, {
      type: 'horizontalBar',
      data: {
        datasets: [{
            label: 'Bucket 1',
            data: [47],
            backgroundColor: "rgb(29, 74, 147)",
        },{
            label: 'Bucket 2',
            data: [36],
            backgroundColor: "rgb(0, 173, 188)",
        },{
            label: 'Bucket 3',
            data: [10],
            backgroundColor: "rgb(255,172,0)",
        },{
            label: 'Remaining Storage',
            data: [7],
            backgroundColor: "rgb(247, 248, 250)",
        },]
    },
      options: {
        events: ['click'],
        tooltips: {
          enabled: false
        },
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
            ticks: {
                beginAtZero:true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize:11
            },
            scaleLabel:{
                display:false
            },
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display:false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            stacked: true
        }]
      },
      }
    });

  }

}
