import { trigger, transition, style, animate } from "@angular/animations";

export const enterCard = trigger('enterAnimations', [
    transition(':enter', [
        animate('4s ease-in-out', style({ translateY: 0 }))
    ])
])