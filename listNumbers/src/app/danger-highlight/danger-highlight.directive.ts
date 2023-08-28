import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appDangerHighlight]'
})
export class DangerHighlightDirective implements OnInit {
    
    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        (<HTMLElement>this.elementRef.nativeElement).style.backgroundColor = 'lightcoral';
    }
}