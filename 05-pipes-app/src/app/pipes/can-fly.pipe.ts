import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): 'Can Fly' | 'Can\'t Fly' {
        return value ? 'Can Fly' : 'Can\'t Fly';
    }
}