import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    state('void',
        style({
            transform:` translateY(100%)`
        })),
    transition(':enter', [
        animate('.3s', style({
            transform:` translateY(0)`
        }))
    ]),
    transition(':leave', [
        animate('1s', style({
            transform: `translateY(100%)`
        }))
    ])
]);
