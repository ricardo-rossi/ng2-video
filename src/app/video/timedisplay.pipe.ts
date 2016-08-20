import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeDisplay' })
export class TimeDisplayPipe implements PipeTransform {
    transform(value: number, args: string[]): string {
        const hh = Math.floor(value / 3600);
        const mm = Math.floor(value / 60) % 60;
        const ss = Math.floor(value) % 60;
        return hh + ':' + (mm < 10 ? '0' : '') + mm + ':' + (ss < 10 ? '0' : '') + ss;
    }
}
