import {Component, ElementRef, HostListener} from '@angular/core';
import {SCREEN_SIZE, ScreenSizeService} from "../../services/screen-size.service";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  title = 'management-ui';

  constructor(private elementRef: ElementRef,
              private resizeSvc: ScreenSizeService) {
  }

  prefix = 'is-';
  sizes = [
    { id: SCREEN_SIZE.XS, name: 'xs', css: `d-block d-sm-none` },
    { id: SCREEN_SIZE.SM, name: 'sm', css: `d-none d-sm-block d-md-none` },
    { id: SCREEN_SIZE.MD, name: 'md', css: `d-none d-md-block d-lg-none` },
    { id: SCREEN_SIZE.LG, name: 'lg', css: `d-none d-lg-block d-xl-none` },
    { id: SCREEN_SIZE.XL, name: 'xl', css: `d-none d-xl-block ` }
  ];

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find(x => {
      // get the HTML element
      const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);

      // check its display property value
      const isVisible = window.getComputedStyle(el).display != 'none';

      return isVisible;
    });
    console.log(currentSize);

    this.resizeSvc.onResize(currentSize.id);
  }
}
