import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public Toggle = false;
  public scrollPostion = 0;

  @HostListener("window:scroll", []) onWindowScroll() {
    const YP = window.pageYOffset ||document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollPostion = YP;
    // console.info(YP);
  }

  constructor( ) {

   }

  ngOnInit(): void {

    // Will not work In SSR
    // window.addEventListener("scroll", (event) => {
    //   this.scrollPostion = window.scrollY;
    // });

  }

  toggle(){
    console.log(this.Toggle)
    this.Toggle = !this.Toggle;
  }

}
