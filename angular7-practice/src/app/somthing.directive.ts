import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[somthing]'
})
export class SomthingDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "white";
    el.nativeElement.style.backgroundColor = "black";
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.el.nativeElement.innerText += " .. this h2 element rendered by app (somthing.directive) component"

  }
}
