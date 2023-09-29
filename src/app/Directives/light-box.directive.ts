import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
// class Decorator 
@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  // attribute or prop Decorator 
 @Input('LightBox') highlightColor:string="yellow";
 @Input() defaultColor:string="green";
  constructor( private elemRef:ElementRef) { 
   //this.elemRef.nativeElement.style.border="2px Solid gray";          // same getelemnetByid javascript 

  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border=`2px Solid ${this.defaultColor}`;          // same getelemnetByid javascript 
  }

// @HostListener methodDecorator  when i want to trigger mthod to  
@HostListener('mouseover')  onMouseOver(){
  this.elemRef.nativeElement.style.border=`2px Solid ${this.highlightColor} `;  
}

@HostListener('mouseout') onMouseOut(){
  this.elemRef.nativeElement.style.border="2px Solid yellow";  

}

}
