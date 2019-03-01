import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  timeElement10Digits = Array.from(Array(10)).map((n, i) => i);
  timeElement6Digits = this.timeElement10Digits.slice(0, 6);
  timeElement3Digits = this.timeElement10Digits.slice(0, 3);
  time = [];

  constructor() {
  }

  ngOnInit(): void {
    this.updateTime();

  }

  updateTime() {
    window.requestAnimationFrame(() => {
      this.updateTime();
    });

    const date = new Date();

    this.time = [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map(n => `0${n}`.slice(-2).split('').map(e => +e))
      .reduce((p, n) => p.concat(n), []);
  }

}
