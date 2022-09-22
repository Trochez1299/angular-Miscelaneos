import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef ) {
    console.log("Directiva llamada");
  }

  // @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') mouseEnter(){
    this.el.nativeElement.style.backgroundColor = "yellow";
    // console.log( this.nuevoColor );
  }

  @HostListener('mouseleave') mouseLeave(){
    this.el.nativeElement.style.backgroundColor = null;
  }

  private resaltar( color:string ) {

  }

}
