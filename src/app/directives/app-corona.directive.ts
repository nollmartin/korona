import { Directive, Input, ElementRef } from '@angular/core';
import { Daily } from '../datas';

@Directive({
  selector: '[appAppCorona]'
})
export class AppCoronaDirective {

  private _dailyCorona!: Daily;
  private _isThruth!: boolean;

  @Input('appAppCorona') set dailyCorona(dailyCorona: Daily) {
    this._dailyCorona=dailyCorona;
    if (dailyCorona.newCoronaCount>Math.floor(dailyCorona.testCount*0.025)) {
      this.element.nativeElement.style.color='red';
    } else {
      this.element.nativeElement.style.color='black';
    }
  }

  @Input() set isThruth(isThruth: boolean) {
    this._isThruth=isThruth;
    if (this.isThruth===true) {
      this.element.nativeElement.style.backgroundColor='lightblue';
    } else {
      this.element.nativeElement.style.backgroundColor='white';
    }
  }

  get isThruth() {
    return this._isThruth;
  }

  get dailyCorona() {
    return this._dailyCorona;
  }

  constructor(private element: ElementRef<HTMLElement>) { }

}
