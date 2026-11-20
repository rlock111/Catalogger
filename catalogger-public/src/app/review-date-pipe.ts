import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reviewDate',
})
export class ReviewDatePipe implements PipeTransform {
  transform(createdOn: string | null | undefined): string {
    const _isDate = function (d: unknown): boolean {
      return !isNaN(Date.parse(d as string));
    };
    if (createdOn != null && _isDate(createdOn)) {
      const thisDate = new Date(createdOn);
      return thisDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    } else {
      return '?';
    }
  }
}
