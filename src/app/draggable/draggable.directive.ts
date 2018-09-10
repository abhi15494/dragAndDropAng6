import { Directive, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private dragging = false;
  constructor() { }

  @HostBinding('class.draggable') draggable = true;

  //Pointerdown => dragStart
  @HostListener('pointerdown') onpointerdown(): void {
    this.dragging = true;
    console.log("pointer Down " + this.dragging);
  };
  //document => pointermove => dragMove
  @HostListener('document:pointermove') onPointerMove(): void {
    if(!this.dragging) return;
    console.log("pointer start");
  };
  //document => pointerup => dragEnd
  @HostListener('document:pointerup') onPointerUp(): void {
    if(!this.dragging) return;
    this.dragging = false;
    console.log("pointer end");
  };

}
