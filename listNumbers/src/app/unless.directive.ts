import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condicion: boolean) {
    if (!condicion) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

}
