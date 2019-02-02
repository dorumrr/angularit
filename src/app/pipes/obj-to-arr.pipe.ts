import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArr'
})

export class ObjToArrPipe implements PipeTransform {

  // converts an object to an array to become *ngFor in (unlimited) *ngFor itterable
  transform(value: object): any {
    return (value) ? Object.keys(value) : value;
  }

}
