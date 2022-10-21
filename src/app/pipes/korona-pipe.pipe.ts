import { Pipe, PipeTransform } from '@angular/core';
import { Daily } from '../datas';

@Pipe({
  name: 'koronaPipe'
})
export class KoronaPipePipe implements PipeTransform {

  transform(value: Daily, isTruth: boolean): unknown {

    let testC: number = value.testCount;
    let coronaC: number = value.newCoronaCount;
    let hospitalC: number = value.hospitalCount;
    if (isTruth===false) {
      testC = value.testCount*2;
      let maxNew = testC*0.05;
      if(coronaC>maxNew) {coronaC=Math.floor(maxNew);}
      hospitalC = Math.floor(hospitalC/3);
    }
    
    return 'A mai napon '+testC+' tesztet végeztünk el, ebből '+coronaC+' lett pozitív, valamint '+hospitalC+' oltatlan, idős beteg van korházban. ';

  }

}
