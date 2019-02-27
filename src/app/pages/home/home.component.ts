import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {


  @ViewChild('typedStrings') typedStrings: ElementRef;
  @ViewChild('typed') typed: ElementRef;
  @ViewChild('soundBird') soundBird: ElementRef;
  isSoundOn = true;
  isShowCard = false;

  constructor() {
  }

  ngOnInit() {

    // this.soundBird.nativeElement.play();

    /*const typed = new Typed(this.typedStrings.nativeElement, {
      strings: ['First sentence.', 'Second sentence.'],
    });*/

    /* const typed = new Typed(this.typedStrings.nativeElement, {
       strings: ['Hello, I\'m Huong', 'How are you?'],
       typeSpeed: 100,
       backSpeed: 0,
       loop: true
     });*/

    const typed = new Typed(this.typed.nativeElement, {
      stringsElement: this.typedStrings.nativeElement,
      typeSpeed: 100,
      backSpeed: 0,
      backDelay: 500,
      startDelay: 1000,
      loop: true
    });

    setTimeout(() => {
      this.soundBird.nativeElement.play();
    }, 500);

  }

  ngAfterViewInit(): void {
  }

  changeSound() {
    this.isSoundOn = !this.isSoundOn;
    if (this.isSoundOn) {
      this.soundBird.nativeElement.play();
    } else {
      this.soundBird.nativeElement.pause();
    }
  }

}
