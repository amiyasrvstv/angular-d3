import { Component, OnInit } from '@angular/core';
import GuageService from './guage.service';

@Component({
  selector: 'app-speed-guage4',
  templateUrl: './speed-guage4.component.html',
  styleUrls: ['./speed-guage4.component.css']
})
export class SpeedGuage4Component implements OnInit {

  constructor(private gauge: GuageService) {}

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
