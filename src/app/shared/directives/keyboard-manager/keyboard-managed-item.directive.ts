import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[appKmItem]'
})
export class KeyboardManagedItemDirective {

    @Output() public focused = new EventEmitter<void>()

    constructor(
        private elementref: ElementRef<HTMLElement>
    ){}

    public focus(): void {
        this.elementref.nativeElement.focus()
        this.focused.emit()
    }

    public idFocused(): boolean {
        return this.elementref.nativeElement === document.activeElement
    }

}