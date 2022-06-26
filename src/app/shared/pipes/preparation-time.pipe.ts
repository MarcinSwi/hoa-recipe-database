import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preparationTime',
})
export class PreparationTimePipe implements PipeTransform {
  transform(value: number): string {
    const numberOfHours = Math.floor(value / 60);
    const numberOfMinutes =
      numberOfHours >= 1 ? value - numberOfHours * 60 : value;

    return numberOfHours >= 1
      ? numberOfHours + 'h ' + numberOfMinutes + 'min'
      : numberOfMinutes + 'min';
  }
}
