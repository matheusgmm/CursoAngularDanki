import { Directive, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector: '[appDropdown]'
})

export default class DropdownDirective {

    @HostBinding('class.show') isOpen: boolean = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }


}