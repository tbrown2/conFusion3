import { Directive , ElementRef, Renderer2, HostListener} from '@angular/core';


//renderer allows us to adapt the application to adapt itself into a platform
//ohst listener lets us listen to mouse movements on the screen 

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
	//adding and removing css classes when mouse does certain actions
  //we have added highlight class to our global style.scss file
	@HostListener('mouseenter') onMouseEnter() {
		this.renderer.addClass(this.el.nativeElement, 'highlight');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.renderer.removeClass(this.el.nativeElement, 'highlight');
	}

}
