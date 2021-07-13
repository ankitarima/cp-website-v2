import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewmenu',
  templateUrl: './reviewmenu.component.html',
  styleUrls: ['./reviewmenu.component.scss']
})
export class ReviewmenuComponent implements OnInit {

  public menuToggle = false;

  public scrollPostion = 0;
  @HostListener("window:scroll", []) onWindowScroll() {
    const YP = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollPostion = YP;
  }

  constructor(
    private viewportScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuToggle = !this.menuToggle;
  }

  scrollTo(section:any){
    console.log(this.viewportScroller.getScrollPosition())
    this.viewportScroller.setOffset([0,120])
    this.viewportScroller.scrollToAnchor(section)
    // this.router.navigate([], { fragment: section });

  }

}
