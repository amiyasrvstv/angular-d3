import { Component, OnInit } from '@angular/core';
import Gauge from './gauge.service';

@Component({
  selector: 'speed-gauge',
  templateUrl: 'speed-gauge.html',
  styleUrls: ['speed-gauge.css'],
})
export default class SpeedGaugeComponent implements OnInit {
  constructor(private gauge: Gauge) {}
  ngOnInit() {
    this.draw();
  };
  private draw() {
    const speedGauge = this.gauge('#power-gauge2', {
      size: 300,
  		clipWidth: 300,
  		clipHeight: 200,
  		ringWidth: 60,
  		maxValue: 10,
  		transitionMs: 4000,
    });
    speedGauge.render();
  }
}