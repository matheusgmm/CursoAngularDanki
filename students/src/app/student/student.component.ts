import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ContentChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class StudentComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @Input() student: { type: string, name: string, description: string }
  @Input() type: string;
  @ViewChild('studentLine') line: ElementRef;
  @ContentChild('studentDescription') description: ElementRef;

  constructor() { 
    console.log('constructor foi chamado');
  }

  ngOnInit(): void {
    console.log('ngOnInit foi chamado');
    // console.log('Conteúdo: ', this.line.nativeElement.textContent);
    console.log('Descrição: ', this.description.nativeElement.textContent);

  } 

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges foi chamado');
    console.log('changes');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck foi chamado');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit foi chamado');  
    console.log('Descrição: ', this.description.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked foi chamado');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit foi chamado');
    console.log('Conteúdo: ', this.line.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked foi chamado');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy foi chamado');
  }
}
