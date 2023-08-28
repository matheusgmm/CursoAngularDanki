import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWarningHighlight]'
})
export class WarningHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange')
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '0.5s ease-in-out')
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '0.5s ease-in-out')

    this.backgroundColor = this.defaultColor;
  }

}
