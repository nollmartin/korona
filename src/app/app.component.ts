import { Component, OnInit } from '@angular/core';
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
  
  ngOnInit(): void {
    let d: Date = this.date;
    for (let i = 1; i <= this.rowCount; i++) {
      //this.date.setDate(this.date.getDate() +1) ;
      d.setDate(this.date.getDate() +1);
      console.log(d)
      this.dailyRows.push({
        date: d,
        testCount: Math.floor(Math.random()*1000+i),
        newCoronaCount: Math.floor(Math.random()*15+i),
        hospitalCount: Math.floor(Math.random()*30+i)
      });
    }
  }

}
