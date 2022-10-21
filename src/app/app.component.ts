import { Component, OnInit, HostListener } from '@angular/core';
import { Daily } from './datas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'korona';
  dailyRows: Daily[] = [];
  date: Date = new Date('01 Jan 2022');
  rowCount: number = 10;
  iWantTheTruth: boolean = false;
  
  ngOnInit(): void {
    for (let i = 1; i <= this.rowCount; i++) {
      this.date.setDate(this.date.getDate() + 1);
      this.dailyRows.push({
        date: new Date(this.date.getTime()),
        testCount: Math.floor(Math.random()*1000+i),
        newCoronaCount: Math.floor((Math.random()*50)),
        hospitalCount: Math.floor(Math.random()*100+i)
      });
    }
  }

  changeTruth() {
    if (this.iWantTheTruth) {
      this.iWantTheTruth=false;
    } else {
      this.iWantTheTruth=true;
    }
  }

  @HostListener('window:keydown', ['$event']) 
  onKeyDown(e: any) {
    if (e.key==='t' && e.altKey===true) {
      this.changeTruth();
    }
  }

}
