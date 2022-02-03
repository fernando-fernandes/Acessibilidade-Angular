import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { ContentChildren, Directive, HostListener, QueryList } from "@angular/core";

@Directive({
    selector: '[appKm]'
})
export class KeyboardManagerDirective {

    @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null

    @HostListener('keyup', ['$event'])
    public manageKeys(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
                console.log('UP')
                this.moveFocus(ArrowDirection.RIGHT).focus()
                break
            case 'ArrowDown':
                console.log('Down')
                this.moveFocus(ArrowDirection.LEFT).focus()
                break
            case 'ArrowLeft':
                console.log('Left')
                this.moveFocus(ArrowDirection.LEFT).focus()
                break
            case 'ArrowRight':
                console.log('Right')
                this.moveFocus(ArrowDirection.RIGHT).focus()
                break
        }
    }

    public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
        const items = this.items.toArray()
        const currentSelectdIndex = items.findIndex( item => item.idFocused())
        const targetElementFocus = items[currentSelectdIndex + direction]

        if (targetElementFocus) {
            return targetElementFocus
        }

        return direction === ArrowDirection.LEFT
            ? items [items.length -1]
            : items[0]
    }

}

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
}